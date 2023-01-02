import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Component } from '../interfaces/Component';
@Directive({
  selector: '[size]',
})
export class SizeDirective implements Component {
  constructor(private el: ElementRef) {}
  button: string = 'button';
  matChip: string = 'mat-chip';
  matChipOption: string = 'mat-chip-option';
  matFormField: string = 'mat-form-field';
  matCheckBox: string = 'mat-checkbox';
  matSlider: string = 'mat-slider';
  matRadioButton: string = 'mat-radio-button';
  matSpinner: string = 'mat-spinner';
  table: string = 'table';
  matTable: string = 'mat-table';
  matIcon: string = 'mat-icon';

  @Input() size!: string;
  ngOnChanges() {
    let element = this.el.nativeElement;
    switch (this.size) {
      case 'small':
        {
          this.button = element.classList.add('small');
          this.matChip = element.classList.add('small');
          this.matChipOption = element.classList.add('small');
          this.matFormField = element.classList.add('small');
          this.matCheckBox = element.classList.add('small');
          this.matRadioButton = element.classList.add('small');
          this.matSlider = element.classList.add('small');
          this.matSpinner = element.classList.add('small');
          this.table = element.classList.add('small');
          this.matTable = element.classList.add('small');
          this.matIcon = element.classList.add('small');
        }
        return;
      case 'large':
        {
          this.button = element.classList.add('large');
          this.matCheckBox = element.classList.add('large');
          this.matRadioButton = element.classList.add('large');
          this.matIcon = element.classList.add('large');
        }
        return;
      default:
        return;
    }
  }
}
