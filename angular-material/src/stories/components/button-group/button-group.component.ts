import { Component, ElementRef, Input, OnInit } from '@angular/core';

export type Colors = | 'primary' | 'accent' | 'warn' | 'info' | 'warning' | 'success';
export type Variant = 'text' | 'outlined' | 'contained';
@Component({
  selector: 'button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent implements OnInit {
  constructor(private el: ElementRef<HTMLHtmlElement>) {}
  @Input() color!: Colors;
  @Input() variant!: Variant;
  ngOnInit(): void {
    console.log(this.el.nativeElement);

    this.el.nativeElement.classList.add(
      `${this.color}-buttonGroup` || ' ',
      `${this.variant}-buttonGroup`
    );
  }
}
