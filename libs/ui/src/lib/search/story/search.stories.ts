import { SearchComponent } from '../search.component';
import { moduleMetadata } from '@storybook/angular';
import { PoFieldModule } from '@po-ui/ng-components';

export default {
  title: 'Search',
  decorators: [
    moduleMetadata({
      imports: [
        PoFieldModule
      ]
    })
  ]
};

export const Default = () => ({

  component: SearchComponent,
  props: {

  },
});
