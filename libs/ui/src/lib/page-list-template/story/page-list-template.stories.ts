import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { PageListTemplateModule } from '../page-list-template.module';
import { PageListTemplateComponent } from '../page-list-template.component';
import { RouterModule } from '@angular/router';
import { TableModule } from '../../table/table.module';


export default {
  title: 'templates / Page List',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        RouterModule.forRoot([]),
        PageListTemplateModule,
        TableModule
      ],
      providers: [
        [{provide: APP_BASE_HREF, useValue : '/' }]
      ]
    })
  ]
};



export const Default = () => ({
  component: PageListTemplateComponent,
  props: {
    columns: [
      { property: 'code' },
      { property: 'product' },
      { property: 'customer' },
      { property: 'value', type: 'number' },
    ],
    items: [
      { code : '1', product: 'Chocolate', customer: 'Cust 1', value: 10.30},
      { code : '2', product: 'Balas', customer: 'Cust 2', value: 1.30},
      { code : '3', product: 'Paes', customer: 'Cust 3', value: 2.20},
      { code : '4', product: 'Café', customer: 'Cust 4', value: 5.30}
    ]
  },
});


