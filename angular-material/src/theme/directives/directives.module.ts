import { NgModule                                   } from '@angular/core';
import { CommonModule                               } from '@angular/common';
import { IconPositionDirective                      } from './Tabs/iconPosition/icon-position.directive';                          
import { OrientationDirective                       } from './orientation/orientation.directive';
import { ColorTextDirective                         } from './colorText/color-text.directive';
import { appearanceDirective                        } from './TextfiledAppearance-directive/appearance';     
import { avatarVariantDirective                     } from './Avatar/avatar-variants.directive';        
import { VariantsDirective                          } from './variantsColor-buttonGroup/variants.directive';
import { SizeDirective                              } from './size-directive/size.directive';
import { ColorChipsDirective, VariantChipsDirective } from './variantsColor-StandardChip/variants-color.directive';
const directivas = [
  OrientationDirective,
  IconPositionDirective,
  ColorTextDirective,
  appearanceDirective,
  avatarVariantDirective,
  VariantsDirective,
  ColorChipsDirective,
  VariantChipsDirective,
  SizeDirective,
];

@NgModule({
  declarations: [directivas],
  imports: [CommonModule],
  exports: [directivas],
  })

export class DirectivesModule { }