import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mat-slidetoggle',
  templateUrl: './mat-slidetoggle.component.html',
  styleUrls: ['../..//styles/main.scss']
})
export class MatSlidetoggleComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;

  public get colorOption(): string[] {
    return [`app-mat-slidetoggle--${this.color}`]
  }
}