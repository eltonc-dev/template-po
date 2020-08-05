import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CrudModel } from '../models/crud-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudResource {

  readonly baseUrl = 'crud';

  private mockList: CrudModel[] = [
    {
      id: '1',
      name: 'Elton',
      age: 29
    },
    {
      id: '2',
      name: 'Claudia',
      age: 35
    },
    {
      id: '3',
      name: 'Bia',
      age: 10
    },
    {
      id: '4',
      name: 'Augusto',
      age: 99
    },
  ];
  // TODO(crud): replace api to your own
  constructor(private api: HttpClient) { }

  getAll(): Observable<CrudModel[]> {
    // return this.api.get<CrudModel[]>(this.baseUrl);
    return of(this.mockList);
  }

  getById(id: string): Observable<CrudModel> {
    //return this.api.get<CrudModel>(`${this.baseUrl}/${id}`);
    return of(this.mockList.find(i => i.id === id));
  }

  save(item: CrudModel, id: string): Observable<any> {
    const postRequest = this.api.post(`${this.baseUrl}`, item);
    const putRequest = this.api.post(`${this.baseUrl}/${id}`, item);

    // return id ? putRequest : postRequest;
    if(id) {
      this.mockList = this.mockList.map((i: CrudModel) => {
        if(i.id === id) {
          i = {...item}
        }
        return i;
      })
    } else {
      this.mockList = [
        ...this.mockList,
        { id: this.mockList.length, ...item }
      ]
    }  
    return of(true);
  }

  delete(id: string): Observable<any> {
    const item = this.mockList.find(i => i.id == id);
    const newList = [...this.mockList];
    newList.splice(this.mockList.indexOf(item), 1);
    console.log(item, newList);
    this.mockList = [
      ...newList
    ];
    //return this.api.delete(`${this.baseUrl}/${id}`);
    return of(true);
  }

  toggle(id: string): Observable<any> {
    return this.api.patch(`${this.baseUrl}/toggle`, null);
  }

  search(params: any): Observable<CrudModel[]> {
    // return this.api.get<CrudModel[]>(`${this.baseUrl}/search`, { params } );
    return of(this.mockList.filter(item => item.name.toLowerCase().indexOf((<string>params.term).toLowerCase()) >= 0));
  }

}
