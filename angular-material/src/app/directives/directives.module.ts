import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPositionDirective } from './Tabs/iconPosition/icon-position.directive';
import { OrientationDirective } from './orientation/orientation.directive';
import { ColorTextDirective } from './colorText/color-text.directive';


@NgModule({
  declarations: [
    OrientationDirective,
    IconPositionDirective,
    ColorTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OrientationDirective,
    IconPositionDirective,
    ColorTextDirective
  ]
})
export class DirectivesModule { }
