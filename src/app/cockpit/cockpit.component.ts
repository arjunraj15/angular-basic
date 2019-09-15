import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
   @Output() servercreated = new EventEmitter<{servername:string, servercontent:string}>();
   @Output () blueprintcreated = new EventEmitter<{servername:string,servercontent:string}>();; 
  newServerName = '';
  newServerContent = '';


onAddServer() {
  this.servercreated.emit({servername: this.newServerName,servercontent:this.newServerContent});
  }

  onAddBlueprint() {
   this.blueprintcreated.emit({servername: this.newServerName,servercontent:this.newServerContent});
  }

  constructor() { }

  ngOnInit() {
  }

}