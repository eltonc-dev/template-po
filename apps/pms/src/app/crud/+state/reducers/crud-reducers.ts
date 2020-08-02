import { Action, createReducer, on } from '@ngrx/store';
import { CrudState, initialCrudState } from '../crud-state';
import {
  CrudAdvancedSearch, CrudAdvancedSearchError, CrudAdvancedSearchSuccess,
  CrudElasticSearch, CrudElasticSearchError,
  CrudElasticSearchSuccess,
  CrudGetAll, CrudGetAllError,
  CrudGetAllSuccess,
  CrudGetByIdError,
  CrudGetByIdSuccess,
  CrudResetAdvancedSearch,
  CrudResetCurrentItem,
  CrudResetElasticSearch,
  CrudSaveError,
  CrudToggleError,
  CrudGetById,
  CrudSave,
  CrudSaveSuccess,
  CrudToggle,
  CrudToggleSuccess,
  CrudDeleteSuccess,
  CrudDeleteError,
  CrudDeleteConfirm
} from '../actions/crud-actions';

const _setErrorState = (state: any, error: string) => {
  return ({...state, error, lastRequestStatus: 'error'});
};

const _loading = (state): any => ({...state, lastRequestStatus: 'loading'});
const _success = (state): any => ({...state, lastRequestStatus: 'success'});

const _CrudReducer = createReducer(
  initialCrudState,
  on(CrudGetAll, (state) => _loading(state)),
  on(CrudGetAllSuccess, (state, { items}) => ({ ..._success(state), items })),
  on(CrudGetAllError, (state, { error }) => _setErrorState(state, error)),

  on(CrudGetById, (state) => _loading(state)),
  on(CrudGetByIdSuccess, (state, { currentItem}) => ({..._success(state), currentItem})),
  on(CrudGetByIdError, (state, { error }) => _setErrorState(state, error)),

  on(CrudSave, (state) => _loading(state)),
  on(CrudSaveSuccess, (state) => _success(state)),
  on(CrudSaveError, (state, { error }) => _setErrorState(state, error)),

  on(CrudDeleteConfirm, (state) => _loading(state)),
  on(CrudDeleteSuccess, (state) => _success(state)),
  on(CrudDeleteError, (state, { error }) => _setErrorState(state, error)),

  on(CrudToggle, (state) => _loading(state)),
  on(CrudToggleSuccess, (state) => _success(state)),
  on(CrudToggleError, (state, { error }) => _setErrorState(state, error)),

  on(CrudElasticSearch, (state, { term}) => ({...state, elasticSearch: term})),
  on(CrudElasticSearchSuccess, (state, { items }) => ({...state,  items})),
  on(CrudElasticSearchError, (state, { error }) => _setErrorState(state, error)),

  on(CrudAdvancedSearch, (state, { filters }) => ({...state, advancedSearch: filters})),
  on(CrudAdvancedSearchSuccess, (state, { items }) => ({...state, filteredItems: items})),
  on(CrudAdvancedSearchError, (state, { error }) => _setErrorState(state, error)),

  on(CrudResetCurrentItem, (state) => ({...state, currentItem: null})),
  on(CrudResetElasticSearch, (state) => ({...state, elasticSearch: null})),
  on(CrudResetAdvancedSearch, (state) => ({...state, advancedSearch: null})),
);

export function CrudReducer(state: CrudState | undefined, action: Action) {
  return _CrudReducer(state, action);
}
