import { Component, Input } from '@angular/core';
import { colors } from '../model/.model';

@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['../config-storybook/main.scss']
})
export class MatSliderComponent {
  @Input () color?: colors;

  public get colorOption(): string[] {
    return ['app-mat-slider',`app-mat-slider--${this.color}`]
  }
};
