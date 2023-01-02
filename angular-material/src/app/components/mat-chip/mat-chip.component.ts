import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-chip',
  template: `<mat-chip [ngClass]="classes">{{ label }}</mat-chip> `,
  styleUrls: ['../../../styles/main.scss'],
})
export class MatChipComponent {
  @Input() label: string = 'Mat-Chip';

  @Input() size: string = 'small' || 'medium';

  public get classes(): string[] {
    return ['Mat-chip', `app-mat-chip--${this.size}`];
  }
}
