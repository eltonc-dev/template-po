import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CRUD_STATE_NAME } from './+state/crud-state';
import { CrudReducer } from './+state/reducers/crud-reducers';
import { EffectsModule } from '@ngrx/effects';
import { CrudEffects } from './+state/effects/crud.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CRUD_STATE_NAME, CrudReducer ),
    EffectsModule.forFeature([ CrudEffects ])
  ]
})
export class CrudModule { }
