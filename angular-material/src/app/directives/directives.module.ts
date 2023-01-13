import { NgModule                } from '@angular/core';
import { CommonModule            } from '@angular/common';
import { IconPositionDirective   } from './Tabs/iconPosition/icon-position.directive';
import { OrientationDirective    } from './orientation/orientation.directive';
import { ColorTextDirective      } from './colorText/color-text.directive';
import { appearanceDirective     } from './appearance-directive/appearance';
import { avatarVariantDirective } from './avatar-component-directive/avatar-variants';

const directivas = [
  OrientationDirective,
  IconPositionDirective,
  ColorTextDirective,
  appearanceDirective,
  avatarVariantDirective
  ];

@NgModule({
  declarations: [directivas],
  imports: [CommonModule],
  exports:[directivas]
})

export class DirectivesModule { }