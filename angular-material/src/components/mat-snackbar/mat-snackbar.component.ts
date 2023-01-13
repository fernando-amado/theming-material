import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mat-snackbar',
  templateUrl: './mat-snackbar.component.html',
  styleUrls: ['../..//styles/main.scss']
})
export class MatSnackbarComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;
    
  public get colorOption(): string[] {
    return [`app-mat-slidetoggle--${this.color}`]
    }
}
