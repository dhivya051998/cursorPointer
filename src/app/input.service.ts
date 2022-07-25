import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  constructor() { }
  appendDiv:{x:string,y:string}[]=[
    {
      "x":300+"px",
      "y":150+"px",    
  },
  {
    "x":380+"px",
    "y":150+"px",    
},
{
  "x":460+"px",
  "y":150+"px",    
},
  ];
  newArray:any;
  createDiv(count:number,count1:number) {
    this.newArray =this.appendDiv.find(ele=>ele.x==count+"px" && ele.y==count1+"px");
    if(!this.newArray){
      this.appendDiv.push(
  {
    "x":count+"px",
    "y":count1+"px",    
});
    }    
  }
  removeItem(i:any){
    this.appendDiv.splice(i,1); 
  }
  showBox:boolean=false;
  top:any="";
  left:any="";
 
  
}
