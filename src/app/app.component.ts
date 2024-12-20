import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListContainerComponent} from './list-container/list-container.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ListContainerComponent
  ],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'welcome-app';
}
