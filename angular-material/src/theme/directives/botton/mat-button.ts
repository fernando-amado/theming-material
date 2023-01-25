import { Input, Directive } from '@angular/core';
@Directive({
  selector: 'app-mat-button',
})

export class MatButtonComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;  

  public get colorOption(): string[] {
   return [`app-mat-button--${this.color}`]
  }
} 