import { Component, Input } from '@angular/core';
import { colors } from '../model/.model';
@Component({
  selector: 'app-mat-progress-bar',
  templateUrl: './mat-progress-bar.component.html',
  styleUrls: ['../config-storybook/main.scss']
})

export class MatProgressBarComponent {
  @Input () color?: colors;
  
  public get colorOption(): string[] {
    return ['app-mat-progress-bar',`app-mat-progress-bar--${this.color}`]
  }
}
