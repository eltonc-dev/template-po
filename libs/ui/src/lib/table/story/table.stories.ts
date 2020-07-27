import { moduleMetadata } from '@storybook/angular';
import { TableComponent } from '../table.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from '../table.module';

export default {
  title: 'Table',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot([]),
        TableModule
      ],
      providers: [
        [{provide: APP_BASE_HREF, useValue : '/' }]
      ]
    })
  ]
};

export const Default = () => ({

  component: TableComponent,
  props: {
    columns: [
      { property: 'code', type: 'cellTemplate' },
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
