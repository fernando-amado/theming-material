import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-spinner',
  templateUrl: './mat-spinner.component.html',
  styleUrls: ['../config.color.scss']
})
export class MatSpinnerComponent {

  @Input () color: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary';

  public get classes(): string[] {
    return ['app-mat-spinner',`app-mat-spinner--${this.color}`]
  }

}
