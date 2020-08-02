import { createAction, props } from '@ngrx/store';
import { CrudModel } from '../../models/crud-model';

export enum CrudActionsEnum {
  GetAll = '[ Crud ] GetAll',
  GetAllSuccess = '[ Crud ] GetAll - SUCCESS',
  GetAllError = '[ Crud ] GetAll - ERROR',

  GetById = '[ Crud ] GetById',
  GetByIdSuccess = '[ Crud ] GetById - SUCCESS',
  GetByIdError = '[ Crud ] GetById - ERROR',

  Save = '[ Crud ] Save',
  SaveSuccess = '[ Crud ] Save - SUCCESS',
  SaveError = '[ Crud ] Save - ERROR',

  Toggle = '[ Crud ] Toggle',
  ToggleSuccess = '[ Crud ] Toggle - SUCCESS',
  ToggleError = '[ Crud ] Toggle - ERROR',

  ElasticSearch = '[ Crud ] Elastic Search',
  ElasticSearchSuccess = '[ Crud ] Elastic  Search - SUCCESS',
  ElasticSearchError = '[ Crud ] Elastic  Search - ERROR',

  AdvancedSearch = '[ Crud ] Advanced Search',
  AdvancedSearchSuccess = '[ Crud ] Advanced  Search - SUCCESS',
  AdvancedSearchError = '[ Crud ] Advanced  Search - ERROR',

  ResetCurrentItem = '[ Crud ] Reset Current item',
  ResetElasticSearch = '[ Crud ] Reset Elastic Search',
  ResetAdvancedSearch = '[ Crud ] Reset Advanced Search',
}

export const CrudGetAll = createAction(CrudActionsEnum.GetAll);
export const CrudGetAllSuccess = createAction(CrudActionsEnum.GetAllSuccess, props<{items: CrudModel[]}>());
export const CrudGetAllError = createAction(CrudActionsEnum.GetAllError, props<{error: string}>());

export const CrudGetById = createAction(CrudActionsEnum.GetById, props<{id: string}>());
export const CrudGetByIdSuccess = createAction(CrudActionsEnum.GetByIdSuccess, props<{currentItem: CrudModel}>());
export const CrudGetByIdError = createAction(CrudActionsEnum.GetByIdError, props<{error: string}>());

export const CrudSave = createAction(CrudActionsEnum.Save, props<{crud: CrudModel, id: string}>());
export const CrudSaveSuccess = createAction(CrudActionsEnum.SaveSuccess);
export const CrudSaveError = createAction(CrudActionsEnum.SaveError, props<{error: string}>());

export const CrudToggle = createAction(CrudActionsEnum.Toggle, props<{id: string}>());
export const CrudToggleSuccess = createAction(CrudActionsEnum.ToggleSuccess);
export const CrudToggleError = createAction(CrudActionsEnum.ToggleError, props<{error: string}>());

export const CrudElasticSearch = createAction(CrudActionsEnum.ElasticSearch, props<{term: string}>());
export const CrudElasticSearchSuccess = createAction(CrudActionsEnum.ElasticSearchSuccess, props<{items: CrudModel[]}>());
export const CrudElasticSearchError = createAction(CrudActionsEnum.ElasticSearchError, props<{error: string}>());

export const CrudAdvancedSearch = createAction(CrudActionsEnum.AdvancedSearch, props<{filters: any}>());
export const CrudAdvancedSearchSuccess = createAction(CrudActionsEnum.AdvancedSearchSuccess, props<{items: CrudModel[]}>());
export const CrudAdvancedSearchError = createAction(CrudActionsEnum.AdvancedSearchError, props<{error: string}>());

export const CrudResetCurrentItem = createAction(CrudActionsEnum.ResetCurrentItem);
export const CrudResetElasticSearch = createAction(CrudActionsEnum.ResetElasticSearch);
export const CrudResetAdvancedSearch = createAction(CrudActionsEnum.ResetAdvancedSearch);
