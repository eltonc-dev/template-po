import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CrudResource } from '../../services/crud-resource';

import {
  CrudGetAll,
  CrudGetAllError,
  CrudGetAllSuccess,
  CrudGetById,
  CrudGetByIdError,
  CrudGetByIdSuccess,
  CrudSave, CrudSaveError, CrudSaveSuccess, CrudToggle, CrudToggleError, CrudToggleSuccess, CrudDelete, CrudDeleteConfirm, CrudDeleteSuccess, CrudDeleteError, CrudDeleteCancel, CrudDeleteConfirmAsk
} from '../actions/crud-actions';
import { catchError, concatMap, switchMap, tap } from 'rxjs/operators';
import { of, iif, Observable } from 'rxjs';
import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';
import { CrudModel } from '../../models/crud-model';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class CrudEffects {

  constructor(private actions$: Actions,
              private store: Store<any>, 
              private resource: CrudResource,
              private toaster: PoNotificationService,
              private dialogService: PoDialogService) { }


  /* GET */            
  getAll$ = createEffect( () => this.actions$.pipe(
    ofType(CrudGetAll),
    switchMap(() => this.resource.getAll().pipe(
      concatMap( (items) => of(CrudGetAllSuccess({items}))),
      catchError( error => of(CrudGetAllError({error})))
    ))
  ));

  getById$ = createEffect( () => this.actions$.pipe(
    ofType(CrudGetById),
    switchMap(({id}) => this.resource.getById(id).pipe(
      concatMap( (currentItem) => of(CrudGetByIdSuccess({currentItem}))),
      catchError( error => of(CrudGetByIdError({error})))
    ))
  ));

  /* SAVE */
  save$ = createEffect( () => this.actions$.pipe(
    ofType(CrudSave),
    switchMap(({crud, id}) => this.resource.save(crud, id).pipe(
      concatMap( () => of(CrudSaveSuccess())),
      catchError( error => of(CrudSaveError({error})))
    ))
  ));

  saveSuccess$ = createEffect( () => this.actions$.pipe(
    ofType(CrudSaveSuccess),
    tap(() => this.toaster.success('variable.saveSuccessM')),
    switchMap(() => of(CrudGetAll())),
  ));


  /* DELETE */
  private openConfirmDeleteModal(crud: CrudModel){
    this.dialogService.confirm({
      title: 'text.wantDelete',
      message: crud ? crud.name : 'item',
      confirm: () => this.store.dispatch(CrudDeleteConfirm({id: crud.id})),
      cancel: () => this.store.dispatch(CrudDeleteCancel())
    })
  }

  private confirmDelete(id) {
    return this.resource.delete(id).pipe(
      concatMap( () => of(CrudDeleteSuccess())),
      catchError( error => of(CrudDeleteError({error}))));

  }
  
  delete$ = createEffect( () => this.actions$.pipe(
    ofType(CrudDelete),
    switchMap(({crud, confirm}) => 
      iif(() => confirm, of(CrudDeleteConfirmAsk({crud})), this.confirmDelete(crud.id))
  )));

  deleteAsk$ = createEffect(() => this.actions$.pipe(
    ofType(CrudDeleteConfirmAsk),
    tap(({crud}) => this.openConfirmDeleteModal(crud))
  ), {dispatch: false});

  deleteConfirm$ = createEffect( () => this.actions$.pipe(
    ofType(CrudDeleteConfirm),
    switchMap(({id}) => this.confirmDelete(id))
  ));

  deleteSuccess$ = createEffect( () => this.actions$.pipe(
    ofType(CrudDeleteSuccess),
    tap(() => this.toaster.success('variable.deleteSuccessM')),
    switchMap(() => of(CrudGetAll())),
  ));

  

  /* TOGGLE */
  toggle$ = createEffect( () => this.actions$.pipe(
    ofType(CrudToggle),
    switchMap(({id}) => this.resource.toggle(id).pipe(
      concatMap( () => of(CrudToggleSuccess())),
      catchError( error => of(CrudToggleError({error})))
    ))
  ));

  toggleSuccess$ = createEffect( () => this.actions$.pipe(
    ofType(CrudToggleSuccess),
    tap(() => this.toaster.success('variable.saveSuccessM'))
  ));


}
