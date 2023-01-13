import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TypographyComponent } from '../stories/typography/typography.component';
import { ButtonGroupComponent } from '../stories/components/button-group/button-group.component';
import { MatButtonModule } from '@angular/material/button';
import { RatingComponent } from '../stories/components/rating/rating.component';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonGroupComponent,
    RatingComponent,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class AppModule {}
