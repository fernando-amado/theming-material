import { Component, Input } from '@angular/core';
import { colors } from '../model/.model';

@Component({
  selector: 'app-mat-slidetoggle',
  templateUrl: './mat-slidetoggle.component.html',
  styleUrls: ['../config-storybook/main.scss']
})
export class MatSlidetoggleComponent {
  @Input () color?: colors;
  
  public get colorOption(): string[] {
    return ['app-mat-slidetoggle',`app-mat-slidetoggle--${this.color}`]
  }
}
