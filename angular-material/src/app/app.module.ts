import { NgModule                  } from '@angular/core';
import { BrowserModule             } from '@angular/platform-browser';
import { BrowserAnimationsModule   } from '@angular/platform-browser/animations';
import { MatProgressBarComponent   } from 'src/components/mat-progress-bar/mat-progress-bar.component';
import { MatToolbarComponent       } from 'src/components/mat-toolbar/mat-toolbar.component';
import { MatSpinnerComponent       } from 'src/components/mat-spinner/mat-spinner.component';
import { MatChipsComponent         } from 'src/components/mat-chips/mat-chips.component';
import { MatBagdeComponent         } from 'src/components/mat-bagde/mat-bagde.component';
import { MatSlidetoggleComponent   } from 'src/components/mat-slidetoggle/mat-slidetoggle.component';
import { MatSnackbarComponent      } from 'src/components/mat-snackbar/mat-snackbar.component';
import { MatTextfieldComponent     } from 'src/components/mat-textfield/input.component';   
import { MatAvatarComponent        } from 'src/components/mat-avatar/mat-avatar.component';
import { appearanceDirective       } from 'src/stories/Directives/appearance-directive/appearance';
import { avatarDirective           } from 'src/stories/Directives/avatar-component-directive/avatar.directive';
import { MatSliderComponent        } from 'src/components/mat-slider/mat-slider.component';   
import { AppComponent              } from './app.component';
import { MaterialModule            } from './material.module';
 
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    exports: [],
    declarations: [
        AppComponent,
        avatarDirective,
        appearanceDirective,
        MatProgressBarComponent,
        MatToolbarComponent,
        MatSpinnerComponent,
        MatSliderComponent,
        MatChipsComponent,
        MatBagdeComponent,
        MatSlidetoggleComponent,
        MatSnackbarComponent,
        MatTextfieldComponent,
        MatAvatarComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
