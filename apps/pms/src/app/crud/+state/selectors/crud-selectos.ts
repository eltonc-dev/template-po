import { CRUD_STATE_NAME, CrudState } from '../crud-state';
import { createSelector } from '@ngrx/store';
import { CrudModel } from '../../models/crud-model';

export const selectFeatureCrud = (state: any): CrudState => state[CRUD_STATE_NAME];
export const selectCrudItems =
  createSelector(selectFeatureCrud, (state: CrudState): CrudModel[] => state.items);

export const selectCrudCurrentItem =
  createSelector(selectFeatureCrud, (state: CrudState): CrudModel => state.currentItem);

export const selectSuccess = 
createSelector(selectFeatureCrud, (state: CrudState): boolean => state.lastRequestStatus === 'success')
