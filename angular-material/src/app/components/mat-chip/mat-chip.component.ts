import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-chip',
  template: `<mat-chip [ngClass]="sizes">{{ label }}</mat-chip> `,
  styleUrls: ['../../../styles/main.scss'],
})
export class MatChipComponent {
  @Input() label: string = 'Mat-Chip';

  @Input() size: string = 'small' || 'medium';

  public get sizes(): string[] {
    return ['Mat-chip', `mat-chip--${this.size}`];
  }
}
