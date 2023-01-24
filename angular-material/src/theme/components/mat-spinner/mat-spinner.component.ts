import { Component, Directive, Input } from '@angular/core';
import { Size } from '../../directives/size-directive/size.directive';
@Component({
  selector: 'app-mat-spinner',
  templateUrl: './mat-spinner.component.html',
 providers:[ 
],

})
export class MatSpinnerComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;
  @Input()
  size: Size = 'small';
  public get colorOption(): string[] {
    return [`app-mat-spinner--${this.color}`,`${this.size}`]
  }
}
