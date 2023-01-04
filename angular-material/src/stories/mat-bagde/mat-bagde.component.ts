import { Component, Input } from '@angular/core';
import { colors } from '../model/.model';
@Component({
  selector: 'app-mat-bagde',
  templateUrl: './mat-bagde.component.html',
  styleUrls: ['../config-storybook/main.scss']
})
export class MatBagdeComponent {
@Input () color?: colors;

public get colorOption(): string[] {
  return ['app-mat-bagde',`app-mat-bagde--${this.color}`]
  }
}
