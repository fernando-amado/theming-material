import { Directive, ElementRef, Input, OnInit } from '@angular/core';

export type Color = 'primary'| 'accent'| 'warn'| 'success'| 'info'| 'warning';
export type Variant = 'stroked';

@Directive({
  selector: 'mat-chip [color]',
})
export class ColorChipsDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input() color!: Color;
  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.color);
  }
}

@Directive({
  selector: 'mat-chip [variant]',
})
export class VariantChipsDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>){}
  @Input() variant!: Variant;

  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.variant);
  }
}
