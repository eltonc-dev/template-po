import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListTemplateComponent } from './page-list-template.component';
import { PageDefaultTemplateModule } from '../page-default-template/page-default-template.module';
import { RouterModule } from '@angular/router';
import { TableModule } from '../table/table.module';
import { PoDisclaimerGroupModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [PageListTemplateComponent],
  exports: [PageListTemplateComponent],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    PageDefaultTemplateModule,
    PoDisclaimerGroupModule
  ]
})
export class PageListTemplateModule { }
