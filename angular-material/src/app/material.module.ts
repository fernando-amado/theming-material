import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { MatButtonModule          } from '@angular/material/button';
import { MatProgressBarModule     } from '@angular/material/progress-bar';
import { MatChipsModule           } from '@angular/material/chips';
import { MatToolbarModule         } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule          } from '@angular/material/slider';
import { MatBadgeModule           } from '@angular/material/badge';
import { MatSlideToggleModule     } from '@angular/material/slide-toggle';
import { MatStepperModule         } from '@angular/material/stepper';
import { MatFormFieldModule       } from '@angular/material/form-field';
import { MatInputModule           } from '@angular/material/input';
import { MatSnackBarModule        } from '@angular/material/snack-bar';
import { MatIconModule            } from '@angular/material/icon';

const components = [
  CommonModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatBadgeModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [components],
  exports: [components]
})
export class MaterialModule { 

  
}

// get twoCharacter() {
//   return this.avatar.name ? this.avatar.name.substring(0,2).toUpperCase() : '';
// }