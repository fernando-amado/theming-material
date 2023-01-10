import { Component, ElementRef, Input, OnInit } from '@angular/core';

export type Colors = 'primary' | 'accent'| 'warn' | 'info' | 'warning' | 'success';

@Component({
  selector: 'button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent implements OnInit {
  constructor(private el: ElementRef<HTMLHtmlElement>) {}
  @Input() color!: Colors

  ngOnInit(): void {
    console.log(this.el.nativeElement)

    this.el.nativeElement.classList.add(`${this.color}-buttonGroup`)


  }
}
