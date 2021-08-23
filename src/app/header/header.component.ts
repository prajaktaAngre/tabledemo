import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetApiService } from '../get-api.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  dataStore: any;
  storeArray = [];

  constructor() { }
  ngOnInit() {
  }
  fetchApiButton(value: any) {
    this.newItemEvent.emit(value);
  }

}
