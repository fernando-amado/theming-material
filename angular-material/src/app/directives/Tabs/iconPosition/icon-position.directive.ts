import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type IconPosition = 'top' | 'start' | 'end' | 'bottom';

@Directive({
  selector: 'mat-tab [iconPosition]',
})

export class IconPositionDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input() iconPosition!: IconPosition;

  ngOnChanges() {
    this.el.nativeElement.classList.add(this.iconPosition);
  }
}
