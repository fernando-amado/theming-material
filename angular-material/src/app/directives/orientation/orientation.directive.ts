import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type Orientation = 'vertical' | 'orizontal';

@Directive({
  selector: 'div,button[orientation]',
})
export class OrientationDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}

  @Input() orientation!: Orientation;

  ngOnChanges() {
  this.el.nativeElement.classList.add(`${this.orientation}}`);
  }
  ngAfterViewInit(): void {
  }
}