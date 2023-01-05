import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-checkbox',
  template: `<mat-checkbox [ngClass]="sizes">{{ label }}</mat-checkbox>`,
  styleUrls: ['../../../styles/main.scss'],
})
export class CheckBoxComponent {
  @Input() label = 'Check-box';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  public get sizes(): string[] {
    return ['Mat-checkbox', `check-box--${this.size}`];
  }
}
