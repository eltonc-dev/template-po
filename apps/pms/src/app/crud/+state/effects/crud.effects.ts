import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CrudResource } from '../../services/crud-resource';
import { ThxToasterService, ThxToasterTypeV2Enum } from '@thex/ui';
import {
  CrudGetAll,
  CrudGetAllError,
  CrudGetAllSuccess,
  CrudGetById,
  CrudGetByIdError,
  CrudGetByIdSuccess,
  CrudSave, CrudSaveError, CrudSaveSuccess, CrudToggle, CrudToggleError, CrudToggleSuccess
} from '../actions/crud-actions';
import { catchError, concatMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudEffects {

  constructor(private actions$: Actions,
              private resource: CrudResource,
              private toaster: ThxToasterService) { }


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

  save$ = createEffect( () => this.actions$.pipe(
    ofType(CrudSave),
    switchMap(({crud, id}) => this.resource.save(crud, id).pipe(
      concatMap( () => of(CrudSaveSuccess())),
      catchError( error => of(CrudSaveError({error})))
    ))
  ));

  saveSuccess$ = createEffect( () => this.actions$.pipe(
    ofType(CrudSaveSuccess),
    tap(() => this.toaster.showMessage({
      type: ThxToasterTypeV2Enum.SUCCESS,
      messages: 'variable.saveSuccessM'
    })),
    switchMap(() => of(CrudGetAll())),
  ));

  toggle$ = createEffect( () => this.actions$.pipe(
    ofType(CrudToggle),
    switchMap(({id}) => this.resource.toggle(id).pipe(
      concatMap( () => of(CrudToggleSuccess())),
      catchError( error => of(CrudToggleError({error})))
    ))
  ));

  toggleSuccess$ = createEffect( () => this.actions$.pipe(
    ofType(CrudToggleSuccess),
    tap(() => this.toaster.showMessage({
      type: ThxToasterTypeV2Enum.SUCCESS,
      messages: 'variable.saveSuccessM'
    }))
  ));


}
