import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-mat-button',
  templateUrl: './mat-button.component.html',
  template: `
  <button mat-raised-button [ngClass]="classes"> Button </button>

  `,
  styleUrls: ['../config.color.scss']
})
export class MatButtonComponent {
constructor () {}

@Input () color: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary';

public get classes(): string[] {
  return ['app-mat-button',`app-mat-button--${this.color}`]
}

} 
