import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDefaultTemplateComponent } from './page-default-template.component';
import { PageTitleModule } from '../page-title/page-title.module';
import { PoBreadcrumbModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PageDefaultTemplateComponent],
  exports: [
    PageDefaultTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PageTitleModule,
    PoBreadcrumbModule
  ]
})
export class PageDefaultTemplateModule { }
