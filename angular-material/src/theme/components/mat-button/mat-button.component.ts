import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mat-button',
  templateUrl: './mat-button.component.html',
})

export class MatButtonComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;  

  public get colorOption(): string[] {
   return [`app-mat-button--${this.color}`]
  }
} 