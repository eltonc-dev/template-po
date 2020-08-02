import { CrudModel } from '../models/crud-model';

export const CRUD_STATE_NAME = 'crud';

export interface CrudState {
  items: CrudModel[];
  currentItem: CrudModel;
  elasticSearch: string;
  advancedSearch: any;
  lastRequestStatus: 'loading' | 'success' | 'error' | null;
  error: String;
}

export const initialCrudState = {
  items: [],
  currentItem: null,
  elasticSearch: null,
  advancedSearch: null,
  lastRequestStatus: null,
  error: null,
};
