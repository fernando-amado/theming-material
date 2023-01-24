import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule      } from '@angular/platform-browser/animations';
import { MatButtonModule              } from '@angular/material/button';
import { MatIconModule                } from '@angular/material/icon';
import { MatRadioModule               } from '@angular/material/radio';
import { MatProgressBarComponent      } from 'src/theme/components/mat-progress-bar/mat-progress-bar.component';
import { MatToolbarComponent          } from 'src/theme/components/mat-toolbar/mat-toolbar.component';
import { MatSpinnerComponent          } from 'src/theme/components/mat-spinner/mat-spinner.component';
import { MatChipsComponent            } from 'src/theme/components/mat-chips/mat-chips.component';
import { MatBagdeComponent            } from 'src/theme/components/mat-bagde/mat-bagde.component';
import { MatSlidetoggleComponent      } from 'src/theme/components/mat-slidetoggle/mat-slidetoggle.component';
import { MatTextfieldComponent        } from 'src/theme/components/mat-textfield/input.component';
import { MatAvatarComponent           } from 'src/theme/components/mat-avatar/mat-avatar.component';
import { MatSliderComponent           } from 'src/theme/components/mat-slider/mat-slider.component';
import { ButtonGroupComponent         } from 'src/theme/components/mat-buttonGroup/button-group.component';
import { MatButtonComponent           } from 'src/theme/components/mat-button/mat-button.component';
import { MatRadioComponent            } from 'src/theme/components/mat-radio/mat-radio.component';
import { MatIconComponent             } from 'src/theme/components/mat-icon/mat-icon.component';
import { MaterialModule               } from './material.module';
import { AppComponent                 } from './app.component';
import { DirectivesModule             } from 'src/theme/directives/directives.module';     
import { CheckboxComponent            } from 'src/theme/components/checkbox/checkbox.component'; 
import { bottomNavigationActionsComponents, BottomNavigationComponent } from '../theme/components/mat-bottom-navigation/bottom-navigation.component';  

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    DirectivesModule,
    MatIconModule,
    MatRadioModule
  ],

  exports: [DirectivesModule],
  declarations: [
    MatRadioComponent,
    CheckboxComponent,
    MatIconComponent,
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
