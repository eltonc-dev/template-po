import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDetailListTemplateComponent } from './page-detail-list-template.component';
import { RouterModule } from '@angular/router';
import { TableModule } from '../table/table.module';
import { PageDefaultTemplateModule } from '../page-default-template/page-default-template.module';
import { PoDisclaimerGroupModule, PoWidgetModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [PageDetailListTemplateComponent],
  exports: [ PageDetailListTemplateComponent ],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    PageDefaultTemplateModule,
    PoDisclaimerGroupModule,
    PoWidgetModule
  ]
})
export class PageDetailListTemplateModule { }
