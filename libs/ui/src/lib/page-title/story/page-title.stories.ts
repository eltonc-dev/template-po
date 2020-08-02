import { moduleMetadata } from '@storybook/angular';
import { SearchModule } from '../../search/search.module';
import { PageTitleComponent } from '../page-title.component';
import { CommonModule } from '@angular/common';
import { PoButtonGroupModule, PoButtonModule } from '@po-ui/ng-components';

export default {
  title: 'Page Title',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SearchModule,
        PoButtonGroupModule,
        PoButtonModule
      ]
    })
  ]
};

export const Default = () => ({
  component: PageTitleComponent,
  props: {

  },
});
