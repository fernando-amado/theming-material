import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-form-field',
  template: `<mat-form-field [ngClass]="classes" appearance="fill">
    <mat-label>{{ label }}</mat-label>
    <input matInput placeholder="{{ label }}" size="small" />
  </mat-form-field>`,
  styleUrls: ['../../../styles/main.scss'],
})
export class FormFieldComponent {
  @Input() label: string = 'Form-field';

  @Input() size: string = 'small' || 'medium';

  public get classes(): string[] {
    return ['Mat-form-field', `form-field--${this.size}`];
  }
}
