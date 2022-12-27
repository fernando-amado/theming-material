import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mat-progress-bar',
  templateUrl: './mat-progress-bar.component.html',
  template: `<mat-progress-bar mode="indeterminate" [ngClass]="classes"></mat-progress-bar>`,
  styleUrls: ['../config.color.scss']
})
export class MatProgressBar {
  
  @Output()
  onClick = new EventEmitter<Event>();

  @Input () color: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary';

  public get classes(): string[] {
    return ['app-mat-progress-bar',`app-mat-progress-bar--${this.color}`]
  }

}
