import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type Orientation = 'vertical'|'horinzontal';

@Directive({
  selector: 'mat-tab-group,div [orientation]',
})
export class OrientationDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}

  @Input() orientation!: Orientation;

  ngOnChanges() {
  this.el.nativeElement.classList.add(`${this.orientation}}`);
  }
  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add(`${this.orientation}`);
  }
}