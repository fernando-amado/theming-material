import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SizeDirective } from './Directivas/size.directive';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { MatInputModule } from '@angular/material/input';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipComponent } from './components/mat-chip/mat-chip.component';
import { MatChipOptionComponent } from './components/mat-chip-option/mat-chip-option.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { SliderComponent } from './components/slider/slider.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { IconComponent } from './components/icon/icon.component';

import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
@NgModule({
  declarations: [
    MatChipOptionComponent,
    MatChipComponent,
    AppComponent,
    FormFieldComponent,
    SizeDirective,
    ButtonComponent,
    CheckBoxComponent,
    SliderComponent,
    RadioButtonsComponent,
    SpinnerComponent,
    IconComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
