import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mat-chips',
  templateUrl: './mat-chips.component.html',
  styleUrls: ['../..//styles/main.scss']
})

export class MatChipsComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;
  
  public get colorOption(): string[] {
    return [`app-mat-chips--${this.color}`]
  }
}
