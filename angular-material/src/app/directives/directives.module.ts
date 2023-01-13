import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPositionDirective } from './Tabs/iconPosition/icon-position.directive';
import { OrientationDirective } from './orientation/orientation.directive';
import { ColorTextDirective } from './colorText/color-text.directive';
import { avatarDirective } from './avatar-component-directive/avatar.directive';
import { VariantsDirective } from './variantsColor-buttonGroup/variants.directive';

const directivas = [
  OrientationDirective,
  IconPositionDirective,
  ColorTextDirective,
  avatarDirective,
  VariantsDirective,
];

@NgModule({
  declarations: [directivas],
  imports: [CommonModule],
  exports: [directivas],
})
export class DirectivesModule {}
