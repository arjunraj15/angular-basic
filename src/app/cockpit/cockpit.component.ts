import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
   @Output() servercreated = new EventEmitter<{servername:string, servercontent:string}>();
   @Output () blueprintcreated = new EventEmitter<{servername:string,servercontent:string}>();; 
    // newServerContent = '';


onAddServer(servernameinput : HTMLInputElement,serverdetailsinput : HTMLInputElement) {
  this.servercreated.emit({servername:servernameinput.value
   ,servercontent:serverdetailsinput.value});
  }

  onAddBlueprint(servernameinput : HTMLInputElement,serverdetailsinput:HTMLInputElement) {
   this.blueprintcreated.emit({servername: servernameinput.value 
   ,servercontent:serverdetailsinput.value});
  }

  constructor() { }

  ngOnInit() {
  }

}