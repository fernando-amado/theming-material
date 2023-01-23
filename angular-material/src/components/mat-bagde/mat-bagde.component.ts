import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mat-bagde',
  templateUrl: './mat-bagde.component.html',
  styleUrls: ['../..//styles/main.scss']
})

export class MatBagdeComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;

 public get colorOption(): string[] {
  return [`app-mat-bagde--${this.color}`]
  }
}