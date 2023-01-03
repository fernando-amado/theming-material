import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-slider',
  template: `<mat-slider [ngClass]="sizes" size="small"><input matSliderThumb /></mat-slider>`,
  styleUrls: ['../../../styles/main.scss'],
})
export class SliderComponent {

  @Input() size: string = 'small' || 'medium';

  public get sizes(): string[]{
    return ['Mat-slider', `slider--${this.size}`]
  }
}
