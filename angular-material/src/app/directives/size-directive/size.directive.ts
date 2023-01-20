import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type Size = 'small' | 'medium' | 'large';

@Directive({
  selector: `button,mat-form-field,mat-avatar,button-group [size] `,
})
export class SizeDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}

  @Input() size: Size = 'small';

  ngOnChanges() {
    this.el.nativeElement.classList.add(this.size);
  }
}
