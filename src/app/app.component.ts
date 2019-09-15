import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElement = [{type:'server',name:'testserver',content:'sample test case'}];  
onServeradd(serverdata :{servername:string,servercontent:string}) {
    this.serverElement.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onBlueprintadd() {
    this.serverElement.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  
}