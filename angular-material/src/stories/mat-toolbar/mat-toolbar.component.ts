import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['../config.color.scss'],
})
export class MatToolbarComponent {
  @Input() color:
    | 'primary'
    | 'accent'
    | 'warn'
    | 'success'
    | 'info'
    | 'warning' = 'primary';

  public get classes(): string[] {
    return ['app-mat-toolbar', `app-mat-toolbar--${this.color}`];
  }
}
