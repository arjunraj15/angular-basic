import { Component, OnInit, Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit ,OnChanges{
 @Input('srvelement') element : {type:string, name:string , content:string}
 constructor() {
   console.log('constructor');
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('ngcahnges called');
        console.log(changes);


  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

}