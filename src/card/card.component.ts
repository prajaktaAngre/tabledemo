import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() storeArrayChild: any;
  istrue: boolean = true;
  changeText: boolean;
  constructor() {
    this.changeText = false;
 }

  ngOnInit(): void {

  }
  showDetails() {
    console.log()
    // console.log(this.dataStore)
    this.istrue = !this.istrue;
  }
  
    
}
