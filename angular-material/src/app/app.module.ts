import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarComponent } from 'src/components/mat-progress-bar/mat-progress-bar.component';
import { MatToolbarComponent } from 'src/components/mat-toolbar/mat-toolbar.component';
import { MatSpinnerComponent } from 'src/components/mat-spinner/mat-spinner.component';
import { MatChipsComponent } from 'src/components/mat-chips/mat-chips.component';
import { MatBagdeComponent } from 'src/components/mat-bagde/mat-bagde.component';
import { MatSlidetoggleComponent } from 'src/components/mat-slidetoggle/mat-slidetoggle.component';
import { MatTextfieldComponent } from 'src/components/mat-textfield/input.component';
import { MatAvatarComponent } from 'src/components/mat-avatar/mat-avatar.component';
import { MatSliderComponent } from 'src/components/mat-slider/mat-slider.component';
import { ButtonGroupComponent } from 'src/components/mat-buttonGroup/button-group.component';
import { MatButtonComponent } from 'src/components/mat-button/mat-button.component';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import {
  BottomNavigationComponent,
  bottomNavigationActionsComponents,
} from '../components/mat-bottom-navigation/bottom-navigation.component';
import { DirectivesModule } from './directives/directives.module';
import { CheckboxComponent } from '..//components/checkbox/checkbox.component';
import { MAT_FAB_DEFAULT_OPTIONS } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    DirectivesModule,
  ],

  exports: [DirectivesModule],
  declarations: [
    CheckboxComponent,
    AppComponent,
    MatProgressBarComponent,
    MatToolbarComponent,
    MatSpinnerComponent,
    MatSliderComponent,
    MatChipsComponent,
    MatBagdeComponent,
    MatSlidetoggleComponent,
    MatTextfieldComponent,
    MatAvatarComponent,
    ButtonGroupComponent,
    MatButtonComponent,
    BottomNavigationComponent,
    bottomNavigationActionsComponents,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
