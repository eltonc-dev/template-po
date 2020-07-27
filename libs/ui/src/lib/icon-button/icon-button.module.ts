import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button.component';
import { PoButtonModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [IconButtonComponent],
  exports: [
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    PoButtonModule
  ]
})
export class IconButtonModule { }
