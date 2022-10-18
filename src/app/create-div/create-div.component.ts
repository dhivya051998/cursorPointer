import { Component, OnInit } from '@angular/core';
import { InputService } from '../input.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-div',
  templateUrl: './create-div.component.html',
  styleUrls: ['./create-div.component.css']
})
export class CreateDivComponent implements OnInit {

  constructor(public _dataService:InputService, private router:ActivatedRoute) { 
    // this.router.paramMap.subscribe(param=>{
    //   this._dataService.left=param.get('param');
    //   this._dataService.top=param.get('param1');
      
    // })
  }
  appendDiv1:any=[];
  ngOnInit(): void {
    this.appendDiv1 = this._dataService.appendDiv;
  }
  move(e:any){
    var count = e.x;
    var count1= e.y;
    this._dataService.createDiv(count,count1);
    
  }
  remove(e:any){
    this._dataService.removeItem(e);
  } 
  show(){
    this._dataService.showBox=true;
  }  
  changeStyle(e:any,value1:string,value2:string){
    this._dataService.top=value1;
    this._dataService.left=value2;
  }
  removeEle(e:any){
    this._dataService.removeItem(e);
  }
  toggle(){
    document.body.classList.toggle("dark");
  }
  
  
}
