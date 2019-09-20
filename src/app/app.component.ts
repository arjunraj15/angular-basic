import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElement = [{type:'server',name:'',content:''}];  
onserveradd(serverdata :{servername:string,servercontent:string}) {
    this.serverElement.push({
      type: 'server',
      name: serverdata.servername,
      content: serverdata.servercontent
    });
  }

  onblueprintadd(blueprintdat :{servername:string,servercontent:string}) {
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintdat.servername,
      content: blueprintdat.servercontent    });
  }

  
}