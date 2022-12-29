import { NgModule             } from '@angular/core';
import { CommonModule         } from '@angular/common';
import { MatButtonModule      } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule       } from '@angular/material/chips';
import { MatToolbarModule         } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const components = [
  CommonModule,
  MatButtonModule,
  MatProgressBarModule,
  MatChipsModule,
  MatToolbarModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: [components],
  exports: [components]
})
export class MaterialModule { 

}
