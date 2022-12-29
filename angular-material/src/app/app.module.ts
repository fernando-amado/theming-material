import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatButtonComponent } from '../stories/mat-button/mat-button.component';

import { MatProgressBarComponent } from 'src/stories/mat-progress-bar/mat-progress-bar.component';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    exports: [
        
    ],
    declarations: [
        AppComponent,
        MatButtonComponent,
        MatProgressBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
