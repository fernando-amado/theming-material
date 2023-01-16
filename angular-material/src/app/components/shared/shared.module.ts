import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


const component = [
  CommonModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatDialogModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
  MatMenuModule,
  MatCheckboxModule,
  MatRadioModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatStepperModule,
  MatTabsModule,
  MatSnackBarModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatNativeDateModule,
  MatBottomSheetModule,
  MatListModule, 
];

@NgModule({
  declarations: [],
  imports: [CommonModule, component],
  exports: [component],
})
export class SharedModule {}
