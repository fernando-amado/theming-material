import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Colors } from './colors.module';



@Directive({
  selector: 'h1,h2,h3,h4,h5,h6,label,p,span,strong,b,s,cite,i,a,small,q,u,code,mat-card-title,mat-card-subtitle [color]',
})
export class ColorTextDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}

  @Input() color?: Colors.primary | Colors.accent | Colors.warn | Colors.success | Colors.info | Colors.warning;

  ngOnChanges() {
   
  }
}