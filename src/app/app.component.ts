import { Component, OnInit } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task3';
  dataStore:any;
  constructor(public api:GetApiService){}
  crossOffItem(value:any){
    this.api.apiCall().subscribe((data: any)=>{
      this.dataStore= (data);
      console.log(this.dataStore)
      })
  }
  
  ngOnInit(){
    
  }
}
