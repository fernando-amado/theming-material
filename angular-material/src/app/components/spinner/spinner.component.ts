import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-spinner',
  template: `<mat-spinner [ngClass]="sizes"></mat-spinner>`,
  styleUrls: ['../../../styles/main.scss'],
})
export class SpinnerComponent {
  @Input() size: string = 'small' || 'medium';

  public get sizes(): string[] {
    return ['Mat-spinner', `mat-spinner--${this.size}`];
  }
}
