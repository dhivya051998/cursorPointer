import { Component, OnInit } from '@angular/core';
import { InputService } from '../input.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(public _dataService:InputService) { }
  appendDiv1:any=[];
  ngOnInit(): void {
    this.appendDiv1 = this._dataService.appendDiv;
  }
  remove(e:any){
    this._dataService.removeItem(e);
  } 
 

}
