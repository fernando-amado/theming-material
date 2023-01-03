import { Component, Input } from '@angular/core';

@Component({
  selector: 'Check-box',
  template: `<mat-checkbox [ngClass]="sizes">{{ label }}</mat-checkbox>`,
  styleUrls: ['../../../styles/main.scss'],
})
export class CheckBoxComponent {
  @Input() label: string = 'Check-box';
  @Input() size: string = 'small' || 'medium' || 'large';

  public get sizes(): string[] {
    return ['Check-box', `check-box--${this.size}`];
  }
}
