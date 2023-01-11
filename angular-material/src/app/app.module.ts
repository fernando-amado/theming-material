import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DirectivesModule } from './directives/directives.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { TypographyComponent } from '../stories/typography/typography.component';
import { ButtonGroupComponent } from '../stories/components/button-group/button-group.component';
import { BottomNavigationComponent } from '../stories/components/bottom-navigation/bottom-navigation.component';

@NgModule({
  declarations: [
    AppComponent, 
    TypographyComponent, 
    ButtonGroupComponent,
    BottomNavigationComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    DirectivesModule,
  ],
  exports: [DirectivesModule],
})
export class AppModule {}
