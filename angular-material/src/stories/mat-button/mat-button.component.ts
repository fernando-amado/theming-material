import { Component, Input } from '@angular/core';
import { colors } from '../model/.model';
@Component({
  selector: 'app-mat-button',
  templateUrl: './mat-button.component.html',
  styleUrls: ['../config-storybook/main.scss']
})

export class MatButtonComponent {
  @Input () color?: colors;

  public get colorOption(): string[] {
   return ['app-mat-button',`app-mat-button--${this.color}`]
  }
} 