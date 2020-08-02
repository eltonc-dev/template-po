import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CrudModel } from '../models/crud-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudResource {

  readonly baseUrl = 'crud';

  private mockList = [
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
  ]
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

    return id ? putRequest : postRequest;
  }

  delete(id: string): Observable<any> {
    return this.api.delete(`${this.baseUrl}/${id}`);
  }

  toggle(id: string): Observable<any> {
    return this.api.patch(`${this.baseUrl}/toggle`, null);
  }

  search(params: any) {
    this.api.get(`${this.baseUrl}/search`, { params } );
  }

}
