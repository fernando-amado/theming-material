import { Component, inject, Input } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { colors } from '../model/.model';
@Component({
  selector: 'app-mat-snackbar',
  templateUrl: './mat-snackbar.component.html',
  styleUrls: ['../config-storybook/main.scss']
})
export class MatSnackbarComponent {
  @Input () color?: colors;
  
  public get colorOption(): string[] {
    return ['app-mat-slidetoggle',`app-mat-slidetoggle--${this.color}`]
    }
}
