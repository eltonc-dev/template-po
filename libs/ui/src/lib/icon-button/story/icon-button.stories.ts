import { moduleMetadata } from '@storybook/angular';
import { PoButtonModule } from '@po-ui/ng-components';
import { IconButtonComponent } from '../icon-button.component';

export default {
  title: 'Icon Button',
  decorators: [
    moduleMetadata({
      imports: [
        PoButtonModule
      ]
    })
  ]
};

export const Default = () => ({

  component: IconButtonComponent,
  props: {

  },
});
