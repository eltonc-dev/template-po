import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { PoFieldModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [SearchComponent],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    PoFieldModule
  ]
})
export class SearchModule { }
