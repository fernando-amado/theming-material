import { Component, Input } from '@angular/core';
import { TypographyLevels} from '../../model/modulo.model';

@Component({
  selector: 'app-typogrpahy-levels',
  templateUrl: './typography.component.html',
  styleUrls: ['../config-storybook/main.scss'],  
})

export class TypographyComponent {
  @Input() level?: TypographyLevels; 
  public get typographyLevel(): string[]{
    return[`app-typogrpahy-levels--${this.level} `]
  };
}
