import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-mat-auto-complete',
  templateUrl: './mat-auto-complete.component.html',
  styleUrls: ['./mat-auto-complete.component.scss']
})
export class MatAutoCompleteComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee','ee' ];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
