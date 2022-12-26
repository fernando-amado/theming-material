import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  template: `<button mat-button [ngClass]="classes">{{label}}</button>`,
  styleUrls: ['./button.component.scss']
})


export class ButtonComponent {
  @Input() label = 'Button'

  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Input() tipo:  'raised'  = 'raised';

  public get classes(): string[] {


    return  ['app-button', `app-button--${this.size}` || 'app-button', `app-button--${this.tipo}`]
  }
}
