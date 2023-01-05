import { NgModule                } from '@angular/core';
import { BrowserModule           } from '@angular/platform-browser';
import { AppRoutingModule        } from './app-routing.module';
import { AppComponent            } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule          } from './material.module';
import { MatButtonComponent      } from '../stories/mat-button/mat-button.component';
import { MatProgressBarComponent } from 'src/stories/mat-progress-bar/mat-progress-bar.component';
import { MatToolbarComponent     } from 'src/stories/mat-toolbar/mat-toolbar.component';
import { MatSpinnerComponent     } from 'src/stories/mat-spinner/mat-spinner.component';
import { MatSliderComponent      } from '../stories/mat-slider/mat-slider.component';
import { MatChipsComponent       } from 'src/stories/mat-chips/mat-chips.component';
import { MatBagdeComponent       } from 'src/stories/mat-bagde/mat-bagde.component';
import { MatSlidetoggleComponent } from 'src/stories/mat-slidetoggle/mat-slidetoggle.component';
import { MatSnackbarComponent } from 'src/stories/mat-snackbar/mat-snackbar.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    exports: [],
    declarations: [
        AppComponent,
        MatButtonComponent,
        MatProgressBarComponent,
        MatToolbarComponent,
        MatSpinnerComponent,
        MatSliderComponent,
        MatChipsComponent,
        MatBagdeComponent,
        MatSlidetoggleComponent,
        MatSnackbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
