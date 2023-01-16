import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MatAutoCompleteComponent } from './components/mat-auto-complete/mat-auto-complete.component';
import { MatBottomSheetComponent } from './components/mat-bottom-sheet/mat-bottom-sheet.component';
import { MatButtonToggleComponent } from './components/mat-button-toggle/mat-button-toggle.component';
import { MatButtonsComponent } from './components/mat-buttons/mat-buttons.component';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import { BootmSheetBodyComponent } from './components/mat-bottom-sheet/bootm-sheet-body/bootm-sheet-body.component';
import { MatChipsComponent } from './components/mat-chips/mat-chips.component';
import { MatDatePickerComponent } from './components/mat-date-picker/mat-date-picker.component';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import { MatExpancionPanelComponent } from './components/mat-expancion-panel/mat-expancion-panel.component';
import { MatSelectComponent } from './components/mat-select/mat-select.component';
import { MatSnackBarComponent } from './components/mat-snack-bar/mat-snack-bar.component';
import { MatMenuComponent } from './components/mat-menu/mat-menu.component';
import { DialogBoxComponent } from './components/mat-dialog/dialog-box/dialog-box.component';
import { ShadowsComponentsListComponent } from './components/documentation/shadows-components-list/shadows-components-list.component';
import { MatFormFieldComponent } from './components/mat-form-field/mat-form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    MatAutoCompleteComponent,
    MatBottomSheetComponent,
    MatButtonToggleComponent,
    MatButtonsComponent,
    MatBottomSheetComponent,
    BootmSheetBodyComponent,
    MatCardComponent,
    MatChipsComponent,
    MatDatePickerComponent,
    MatDialogComponent,
    DialogBoxComponent,
    MatExpancionPanelComponent,
    MatSelectComponent,
    MatSelectComponent,
    MatMenuComponent,
    MatSnackBarComponent,
    MatFormFieldComponent,
    ShadowsComponentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
