import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CrudState } from '../crud-state';
import { Observable } from 'rxjs';
import { CrudModel } from '../../models/crud-model';
import {
  CrudElasticSearch,
  CrudGetAll,
  CrudGetById,
  CrudResetCurrentItem,
  CrudResetElasticSearch,
  CrudToggle,
  CrudSave,
  CrudDelete,
  CrudDeleteConfirmAsk
} from '../actions/crud-actions';
import { selectCrudCurrentItem, selectCrudItems, selectSuccess,  } from '../selectors/crud-selectos';

@Injectable({
  providedIn: 'root'
})
export class CrudFacadeService {

  constructor(private store: Store<CrudState>) { }

  getAll(dispatch = true): Observable<CrudModel[]> {
    dispatch && this.store.dispatch(CrudGetAll());
    return this.store.select(selectCrudItems);
  }

  getById(id: string, dispatch = true) {
    dispatch && this.store.dispatch(CrudGetById({id}));
    return this.store.select(selectCrudCurrentItem);
  }

  save(crud: CrudModel, id: string): Observable<boolean> {
    this.store.dispatch(CrudSave({crud, id}));
    return this.store.select(selectSuccess);
  }

  delete(crud: CrudModel, confirm = true){
    this.store.dispatch(CrudDelete({crud, confirm}));
    // return this.store.select(selectSuccess);
  }

  toggle(id) {
    this.store.dispatch(CrudToggle({id}));
  }

  elasticSearch(term: string) {
    this.store.dispatch(CrudElasticSearch({term}));
  }

  resetCurrentItem() {
    this.store.dispatch(CrudResetCurrentItem());
  }

  resetElasticSearch() {
    this.store.dispatch(CrudResetElasticSearch());
  }

}
