import { Directive, ElementRef, Input, OnInit } from '@angular/core';

export type Variant = 'text' | 'outlined' | 'contained';

@Directive({
  selector: 'button-group [color]',
})
export class VariantsDirective implements OnInit {
  constructor(private el: ElementRef<HTMLHtmlElement>) {}
  @Input()
  color: 'primary' | 'accent' | 'warn' | 'success' | 'info' | 'warning' =
    'primary';

  @Input()
  variant!: Variant;

  ngOnInit(): void {
    this.el.nativeElement.classList.add(
      `${this.color}-buttonGroup` || ' ',
      `${this.variant}-buttonGroup`
      );
  }
}
