import { Component, Input } from '@angular/core';
import { colors } from '../model/.model';

@Component({
  selector: 'app-mat-chips',
  templateUrl: './mat-chips.component.html',
  styleUrls: ['../config-storybook/main.scss']
})
export class MatChipsComponent {
  @Input () color?: colors;
  
  public get colorOption(): string[] {
    return ['app-mat-chips',`app-mat-chips--${this.color}`]
  }
}
