import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

export type Size = 'small' | 'medium' | 'large';

@Directive({
  selector: `[size] `,
})
export class SizeDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}

  @Input() size: Size = 'small';

  ngOnChanges() {
    this.el.nativeElement.classList.add(this.size);
  }

  ngAfterViewInit(): void {
     
    let element = this.el.nativeElement.querySelectorAll('.mat-mdc-form-field-subscript-wrapper') 
      element.forEach(app  => {
        if(app.children[0].children[0].innerHTML == ""){
          app.classList.add('display_none')
        }
      })
  }
}
