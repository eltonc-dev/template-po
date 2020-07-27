import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { PoTableModule, PoWidgetModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    PoTableModule,
    PoWidgetModule
  ]
})
export class TableModule { }
