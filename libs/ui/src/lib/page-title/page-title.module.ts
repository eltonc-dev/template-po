import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title.component';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { SearchModule } from '../search/search.module';
import { PoBreadcrumbModule, PoButtonGroupModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PageTitleComponent],
  exports: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    IconButtonModule,
    SearchModule,
    PoButtonGroupModule,
  ]
})
export class PageTitleModule { }
