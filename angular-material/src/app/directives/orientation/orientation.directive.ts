import { Directive, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

export type Orientation = 'vertical';

@Directive({
  selector: 'mat-tab-group,button-group [orientation]',
})
export class OrientationDirective implements OnChanges {



  constructor(private el: ElementRef<HTMLElement>) {}

  @Input() orientation!: Orientation;


  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add(`${this.orientation}--${this.el.nativeElement.tagName.toLowerCase()}`);  
    console.log(this.el.nativeElement)
  }
  ngOnChanges() {

  }
}
