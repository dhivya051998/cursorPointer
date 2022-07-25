import { Component } from '@angular/core';
import { InputService } from './input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route';
  constructor(private _dataService:InputService){

  }
}
