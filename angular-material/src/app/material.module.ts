import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';


const components = [
  CommonModule,
  MatButtonModule,
  MatBadgeModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [],
  imports: [ components],
  exports: [components]
})
export class MaterialModule { 

}
