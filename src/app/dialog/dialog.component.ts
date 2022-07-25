import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InputService } from '../input.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(public data:InputService, private route:ActivatedRoute) {
   }
  ngOnInit(): void {
  }
  x_value:any="";
  y_value:any="";
  appendDiv1:any=[];
  hide(e:any){
    if(this.x_value !== "" && this.y_value !=="" ){
        this.data.createDiv(this.x_value,this.y_value);
    }
    this.data.showBox=false;
  }
}
