import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SizeDirective } from './Directivas/size/size.directive';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule],
  declarations: [AppComponent, SizeDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
