import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['../..//styles/main.scss']
})
export class MatSliderComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;

  public get colorOption(): string[] {
    return [`app-mat-slider--${this.color}`]
  }
};