import { Action, createReducer, on } from '@ngrx/store';
import { CrudState, initialCrudState } from '../crud-state';
import {
  CrudAdvancedSearch, CrudAdvancedSearchError, CrudAdvancedSearchSuccess,
  CrudElasticSearch, CrudElasticSearchError,
  CrudElasticSearchSuccess,
  CrudGetAll, CrudGetAllError,
  CrudGetAllSuccess, CrudGetByIdError,
  CrudGetByIdSuccess, CrudResetAdvancedSearch, CrudResetCurrentItem, CrudResetElasticSearch, CrudSaveError, CrudToggleError
} from '../actions/crud-actions';

const _setErrorState = (state: any, error: string) => {
  return ({...state, error, loading: false});
};

const _CrudReducer = createReducer(
  initialCrudState,
  on(CrudGetAll, (state) => ({...state, loading: true})),
  on(CrudGetAllSuccess, (state, { items}) => ({...state, items, loading: false})),
  on(CrudGetAllError, (state, { error }) => _setErrorState(state, error)),

  on(CrudGetByIdSuccess, (state, { currentItem}) => ({...state, currentItem})),
  on(CrudGetByIdError, (state, { error }) => _setErrorState(state, error)),

  on(CrudSaveError, (state, { error }) => _setErrorState(state, error)),

  on(CrudToggleError, (state, { error }) => _setErrorState(state, error)),

  on(CrudElasticSearch, (state, { term}) => ({...state, elasticSearch: term})),
  on(CrudElasticSearchSuccess, (state, { items }) => ({...state, filteredItems: items})),
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
