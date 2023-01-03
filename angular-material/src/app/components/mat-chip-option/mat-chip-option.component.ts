import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-chip-option',
  template: `<mat-chip-option [ngClass]="sizes">{{
    label
  }}</mat-chip-option> `,
  styleUrls: ['../../../styles/main.scss'],
})
export class MatChipOptionComponent {
  @Input() label: string = 'mat-chip-option';

  @Input() size: string = 'small' || 'medium';

  public get sizes(): string[] {
    return ['Mat-chip-option', `mat-chip-option--${this.size}`];
  }
}
