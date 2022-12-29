import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-progress-bar',
  templateUrl: './mat-progress-bar.component.html',
  styleUrls: ['../config.color.scss']
})

export class MatProgressBarComponent {
  
  @Input () color: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary';
  
  public get classes(): string[] {
    return ['app-mat-progress-bar',`app-mat-progress-bar--${this.color}`]
  }

}
