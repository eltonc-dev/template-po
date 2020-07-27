import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageTitleModule } from '../../page-title/page-title.module';
import { PageDefaultTemplateComponent } from '../page-default-template.component';
import { PoBreadcrumbModule } from '@po-ui/ng-components';


export default {
  title: 'templates / Page Default',
  decorators: [
    moduleMetadata({
      declarations: [PageDefaultTemplateComponent],
      imports: [
        CommonModule,
        RouterModule,
        PageTitleModule,
        PoBreadcrumbModule,
      ]
    })
  ]
};



export const Default = () => ({
  component: PageDefaultTemplateComponent,
  template: `
    <thex-page-default-template>
        Conteúdo customizado aqui
    </thex-page-default-template>
  `,
  props: {

  },
});


