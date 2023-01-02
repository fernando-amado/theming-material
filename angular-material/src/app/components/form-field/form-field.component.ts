import { Component, Input } from '@angular/core';

@Component({
  selector: 'Form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['../../../styles/main.scss'],
})
export class FormFieldComponent {
  @Input() label: string = 'Form-field';

  @Input() size: string = 'small' || 'medium';

  public get classes(): string[] {
    return ['Form-field', `app-form-field--${this.size}`];
  }
}
