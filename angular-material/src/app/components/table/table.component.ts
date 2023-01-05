import { Component, Input } from '@angular/core';
interface Transaction {
  item: string;
  cost: number;
}
@Component({
  selector: 'Table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../styles/main.scss'],
})
export class TableComponent {
  @Input() size: string = 'small' || 'medium';

  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    { item: 'Beach ball', cost: 4 },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 },
  ];
  getTotalCost() {
    return this.transactions
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
  public get sizes(): string[] {
    return ['Table', `table--${this.size}`];
  }
}
