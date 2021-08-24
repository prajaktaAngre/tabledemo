import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() storeArrayChild: any;
  
  constructor() { }
 
  ngOnInit(): void {
    
  }
  showDetails(){
  console.log(this.storeArrayChild)
  // console.log(this.dataStore)
  }

}
