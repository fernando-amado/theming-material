import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
  template: `<mat-slider>
  <input matSliderThumb>
</mat-slider>`,
  styleUrls: ['../config.color.scss']
})
export class MatSliderComponent {
  constructor () {}

  @Input () color: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary';
  
  public get classes(): string[] {
    return ['app-mat-button',`app-mat-button--${this.color}`]
  }
}
