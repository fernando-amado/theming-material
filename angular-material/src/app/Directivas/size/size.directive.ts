import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type Size = 'small' | 'medium' | 'large';

@Directive({
  selector: `button,mat-form-field,mat-chip,mat-chip-option,mat-checkbox,mat-radio-button,mat-spinner,mat-slider,table,mat-table,mat-icon[size] `,
})
export class SizeDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}

  @Input() size!: Size;

  ngOnChanges() {
    this.el.nativeElement.classList.add(this.size);
  }
}
