import {Component, input, OnChanges, SimpleChanges} from '@angular/core';
import {IListItem} from './list-item';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  standalone: true,
  // styleUrl: './list-item.component.scss'
  host: {
    'class': 'list-item'
  }
})
export class ListItemComponent implements OnChanges {
  data = input<IListItem>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("I'm changed");
  }
}
