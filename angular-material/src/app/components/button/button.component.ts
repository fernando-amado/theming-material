import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button mat-button [ngClass]="sizes">{{ label }}</button>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = 'Button';

  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Input() tipo: 'raised' = 'raised';

  public get sizes(): string[] {
    return [
      'app-button',
      `app-button--${this.size}` || 'app-button',
      `app-button--${this.tipo}`,
    ];
  }
}
