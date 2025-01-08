import { Component } from '@angular/core';
import {ListItemComponent} from '../list-item/list-item.component';
import {IListItem} from '../list-item/list-item';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';

@Component({
  selector: 'app-list-container',
  imports: [
    ListItemComponent,
    MatButtonModule,
    MatRippleModule,
  ],
  templateUrl: './list-container.component.html',
  standalone: true,
  // styleUrl: './list-container.component.scss'  - подключает стили из данного файла
  host: {
    'class': 'list-container' // - подключает стили из .list-container(файла style.scss)
  }
})
export class ListContainerComponent {
  public listItems: Array<IListItem> = [
    {
      avatar: "A",
      headline: "Headline 42",
      supportingText: "Supporting text"
    },
    {
      avatar: "B",
      headline: "Headline 42",
      supportingText: "Supporting text"
    },
    {
      avatar: "C",
      headline: "Headline 42",
      supportingText: "Supporting text"
    }
  ];

  public addElement() {
    let item: IListItem ={
      avatar: "1",
      headline: "New element",
      supportingText: "Supporting text"
    };
    this.listItems.push(item);
  }

  public changeFirstElement() {
    let firstItem = this.listItems[0];
    firstItem.avatar = "3";
  }
}
