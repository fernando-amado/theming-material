import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type Color = 'primary' |'accent'|'warn'|'success'|'info'|'warning';

@Directive({
  selector: 'h1,h2,h3,h4,h5,h6,label,p,span,strong,b,s,cite,i,a,small,q,u,code,mat-card-title,mat-card-subtitle [color]',
})
export class ColorTextDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}

  @Input() color!: Color;

  ngOnChanges() {}

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add(this.color);
  }
}