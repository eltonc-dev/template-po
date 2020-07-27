import { moduleMetadata } from '@storybook/angular';
import { SearchModule } from '../../search/search.module';
import { IconButtonModule } from '../../icon-button/icon-button.module';
import { PageTitleComponent } from '../page-title.component';
import { CommonModule } from '@angular/common';
import { PoBreadcrumbModule, PoButtonGroupModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

export default {
  title: 'Page Title',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SearchModule,
        IconButtonModule,
        PoButtonGroupModule,
      ]
    })
  ]
};

export const Default = () => ({
  component: PageTitleComponent,
  props: {

  },
});
