import { Component, Input       } from '@angular/core';
import { TypographyLevels       } from '../../model/modelo.model';

@Component({
  selector: 'app-typogrpahy-levels',
  templateUrl: './typography.component.html',
  styleUrls: ['../..//styles/main.scss']
})

export class TypographyComponent {
  @Input() level?: TypographyLevels; 
  public get typographyLevel(): string[]{
    return[`app-typogrpahy-levels--${this.level} `]
  };
}