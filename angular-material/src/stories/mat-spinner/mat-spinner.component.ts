import { Component, Input } from '@angular/core';
import { colors } from '../model/.model';

@Component({
  selector: 'app-mat-spinner',
  templateUrl: './mat-spinner.component.html',
  styleUrls: ['../config-storybook/main.scss']
})
export class MatSpinnerComponent {
  @Input () color?: colors;

  public get colorOption(): string[] {
    return ['app-mat-spinner',`app-mat-spinner--${this.color}`]
  }
}
