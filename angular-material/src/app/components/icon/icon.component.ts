import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-icon',
  template: `<mat-icon [ngClass]="sizes" color='warn'>home</mat-icon> `,
  styleUrls: ['../../../styles/main.scss'],
})
export class IconComponent {
  @Input() size: string = 'small' || 'medium' || 'large';

  public get sizes(): string[] {
    return ['Mat-icon', `mat-icon--${this.size}`];
  }
}
