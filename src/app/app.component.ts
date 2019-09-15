import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElement = [{type:'server',name:'testserver',content:'sample test case'}];  
onserveradd(serverdata :{servername:string,servercontent:string}) {
    this.serverElement.push({
      type: 'server',
      name: serverdata.servername,
      content: serverdata.servercontent
    });
  }

  onblueprintadd(blueprintdata :{servername:string,servercontent:string}) {
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintdata.servername,
      content: blueprintdata.servercontent    });
  }

  
}