import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type Orientation = 'vertical';

@Directive({
  selector: 'mat-tab-group,div [orientation]',
})
export class OrientationDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}

  @Input() orientation!: Orientation;

  ngOnChanges() {}

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add(`${this.orientation}`);
  }
}