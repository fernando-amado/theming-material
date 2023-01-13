import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mat-progress-bar',
  templateUrl: './mat-progress-bar.component.html',
  styleUrls: ['../..//styles/main.scss']
})

export class MatProgressBarComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;
  
  public get colorOption(): string[] {
    return [`app-mat-progress-bar--${this.color}`]
    
  }
}
