import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title.component';
import { SearchModule } from '../search/search.module';
import { PoButtonGroupModule, PoButtonModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [PageTitleComponent],
  exports: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    PoButtonGroupModule,
    PoButtonModule
  ]
})
export class PageTitleModule { }
