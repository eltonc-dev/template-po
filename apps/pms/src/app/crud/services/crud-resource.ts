import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudModel } from '../models/crud-model';
// TODO(crud): remove api BaseApiService
import { BaseApiService } from '@bifrost/api-builder/services/base-api/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class CrudResource {

  readonly baseUrl = 'crud';

  // TODO(crud): replace api to your own
  constructor(private api: BaseApiService) { }

  getAll(): Observable<CrudModel[]> {
    return this.api.get(this.baseUrl);
  }

  getById(id: string): Observable<CrudModel> {
    return this.api.get(`${this.baseUrl}/${id}`);
  }

  save(item: CrudModel, id: string): Observable<any> {
    const postRequest = this.api.post(`${this.baseUrl}`, item);
    const putRequest = this.api.post(`${this.baseUrl}/${id}`, item);

    return id ? putRequest : postRequest;
  }

  toggle(id: string): Observable<any> {
    return this.api.patch(`${this.baseUrl}/toggle`);
  }

  search(params: string) {
    this.api.get(`${this.baseUrl}/search`, { params } );
  }

}
