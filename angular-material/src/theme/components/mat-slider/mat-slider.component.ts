import { Component, Input } from '@angular/core';
import { Size } from 'src/theme/directives/size-directive/size.directive';
@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
})
export class MatSliderComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;

  @Input()
  size: Size ='small';
  
  public get colorOption(): string[] {
    return [`app-mat-slider--${this.color}`, `${this.size}`]
  }
};