import { Component, Input } from '@angular/core';
import { colors } from '../model/.model';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['../config-storybook/main.scss']
})
export class MatToolbarComponent {
  @Input() color?: colors

  public get colorOption(): string[] {
    return ['app-mat-toolbar', `app-mat-toolbar--${this.color}`];
  }
}
