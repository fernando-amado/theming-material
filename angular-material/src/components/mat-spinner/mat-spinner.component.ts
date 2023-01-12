import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mat-spinner',
  templateUrl: './mat-spinner.component.html',
  styleUrls: ['../..//styles/main.scss']
})
export class MatSpinnerComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;
  
  public get colorOption(): string[] {
    return [`app-mat-spinner--${this.color}`]
  }
}
