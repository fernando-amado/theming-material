import { NgModule                             } from '@angular/core';
import { CommonModule                         } from '@angular/common';
import { IconPositionDirective                } from './Tabs/iconPosition/icon-position.directive';
import { OrientationDirective                 } from './orientation/orientation.directive';
import { ColorTextDirective                   } from './colorText/color-text.directive';
import { appearanceDirective                  } from './appearance-directive/appearance';
import { avatarVariantDirective               } from './avatar-directive/avatar-variants';
import { VariantsDirective                    } from './variantsColor-buttonGroup/variants.directive';
import { SizeDirective                        } from './size-directive/size.directive';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS       } from '@angular/material/form-field';
import { MAT_FAB_DEFAULT_OPTIONS              } from '@angular/material/button';
import { MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS } from '@angular/material/progress-spinner';
import { MAT_CHIPS_DEFAULT_OPTIONS            } from '@angular/material/chips';

const directivas = [
  OrientationDirective,
  IconPositionDirective,
  ColorTextDirective,
  appearanceDirective,
  avatarVariantDirective,
  VariantsDirective,
  SizeDirective
];

@NgModule({
  declarations: [directivas],
  imports: [CommonModule],
  exports: [directivas],
  providers: [
    {provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, useValue: { size: 'small'}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline'}},
  ],})

export class DirectivesModule { }