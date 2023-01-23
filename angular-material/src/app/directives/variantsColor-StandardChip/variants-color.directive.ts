import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type Color = 'primary' |'accent'|'warn'|'success'|'info'|'warning';

@Directive({
  selector: 'mat-chip [color]'
})
export class VariantsColorDirective implements OnChanges  {

  constructor(private el: ElementRef<HTMLElement>) { }

  @Input() color!: Color;
  ngOnChanges() {
    this.el.nativeElement.classList.add(this.color);
  }

}
