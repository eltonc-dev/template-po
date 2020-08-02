import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoModule, PoTableModule, PoFieldModule, PoDialogModule, PoButtonModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

import { CrudModule } from './crud/crud.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NewComponent } from './new/new.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, NewComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    PoTableModule,
    PoFieldModule,
    PoDialogModule,
    PoButtonModule,
    RouterModule.forRoot([
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'edit',
        component: NewComponent
      }
    ]),
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    CrudModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
