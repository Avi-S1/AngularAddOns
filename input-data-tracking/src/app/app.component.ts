import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Input box tracking';
  displayVal="";
  getValue(val:string)
  {
    console.log()
    this.displayVal=val
  }
} 
