import { Component, Input } from '@angular/core';

@Component({
  selector: 'mat-radio-buttons',
template:`  <mat-radio-button [ngClass]="sizes" >{{label}}</mat-radio-button>`,
  styleUrls: ['../../../styles/main.scss'],
})
export class RadioButtonsComponent {

  @Input() label: string = 'radio-button'

  @Input() size: string = 'small' || 'medium' || 'large'

  public get sizes(): string[]{
    return ['mat-radio-buttons',`radio-button--${this.size}`]
  }
}
