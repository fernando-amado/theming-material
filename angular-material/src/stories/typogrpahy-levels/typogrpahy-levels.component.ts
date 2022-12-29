import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typogrpahy-levels',
  templateUrl: './typogrpahy-levels.component.html',
  template: ` <span [ngClass]="classes">{{ level }}</span> `,
  styleUrls: ['../typography-config.scss'],
})
export class TypogrpahyLevelsComponent {
  @Input() level:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle-1'
    | 'subtitle-2'
    | 'body-1'
    | 'body-2'
    | 'caption'
    | 'overline' = 'body-2';

  public get classes(): string[] {
    return [
      'app-typogrpahy-levels',
      `app-typogrpahy-levels--${this.level}` || 'app-typogrpahy-levels',
    ];
  }
}
