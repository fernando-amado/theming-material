import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  template: `
    <div class="container-component">

      <div class="text-container-component text-container-component__column text-container-component__border-Right text-container-component__widht_50">
        <span class="mat-h6">typography level: <span class="subtitle-color mat-subtitle-1">{{class}}</span> </span> 
        <ul>
          <li>
            <p class="mat-subtitle-2">font-family: <span class="text-color mat-body-strong">value</span> </p> 
          </li>
          <li>
            <p class="mat-subtitle-2">font-size: <span class="text-color mat-body-strong">value</span> </p> 
          </li>
          <li>
            <p class="mat-subtitle-2">font-weight: <span class="text-color mat-body-strong">value</span> </p> 
          </li>
          <li>
            <p class="mat-subtitle-2">font-height: <span class="text-color mat-body-strong">value</span> </p> 
          </li>
          <li>
            <p class="mat-subtitle-2">letter-spacing: <span class="text-color mat-body-strong">value</span> </p> 
          </li>
        </ul>
      </div>

      <div class="text-container-component centered text-container-component__widht_50">
        <span [ngClass]="classTypography">{{class}}</span>
      </div>

    </div>
  `,
  styleUrls: ['../../../styles/main.scss']
})
export class TypographyComponent {
  @Input() class?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle-1' | 'subtitle-2' | 'body-1' | 'body-2' | 'caption' | 'overline';

  public get classTypography(): string[] {
    return [
      `mat-${this.class}`
    ];
  }
}
