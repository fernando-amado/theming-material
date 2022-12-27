import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';
import { MatAutoCompleteComponent } from './components/mat-auto-complete/mat-auto-complete.component';
import { MatExpancionPanelComponent } from './components/mat-expancion-panel/mat-expancion-panel.component';
import { MatButtonsComponent } from './components/mat-buttons/mat-buttons.component';
import { MatButtonToggleComponent } from './components/mat-button-toggle/mat-button-toggle.component';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import { MatDatePickerComponent } from './components/mat-date-picker/mat-date-picker.component';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import { DialogBoxComponent } from './components/mat-dialog/dialog-box/dialog-box.component';
import { MatChipsComponent } from './components/mat-chips/mat-chips.component';
import { MatMenuComponent } from './components/mat-menu/mat-menu.component';
import { MatSelectComponent } from './components/mat-select/mat-select.component';
import { MatSnackBarComponent } from './components/mat-snack-bar/mat-snack-bar.component';
import { MatBottomSheetComponent } from './components/mat-bottom-sheet/mat-bottom-sheet.component';
import { BootmSheetBodyComponent } from './components/mat-bottom-sheet/bootm-sheet-body/bootm-sheet-body.component';
import { AllElevationsLevelComponent } from './components/documentation/all-elevations-level/all-elevations-level.component';
import { ShadowsComponentsListComponent } from './components/documentation/shadows-components-list/shadows-components-list.component';
import { TypographyComponent } from './components/typography/typography.component';


@NgModule({
  declarations: [
    AppComponent,
    MatAutoCompleteComponent,
    MatExpancionPanelComponent,
    MatButtonsComponent,
    MatButtonToggleComponent,
    MatCardComponent,
    MatDatePickerComponent,
    MatDialogComponent,
    DialogBoxComponent,
    MatChipsComponent,
    MatMenuComponent,
    MatSelectComponent,
    MatSnackBarComponent,
    MatBottomSheetComponent,
    BootmSheetBodyComponent,
    ShadowsComponentsListComponent,
    AllElevationsLevelComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
