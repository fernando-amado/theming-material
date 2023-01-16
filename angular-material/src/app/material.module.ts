import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


const components = [
  CommonModule,
  MatAutocompleteModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBottomSheetModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatStepperModule,
  MatTabsModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatNativeDateModule,
  MatListModule,
  MatMenuModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports:[
    components
  ]
})
export class MaterialModule { }
