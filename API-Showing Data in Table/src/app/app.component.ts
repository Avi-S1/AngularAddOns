import { Component } from '@angular/core';

import { FreeapiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
import { YschoolService } from './services/yschool.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private yschoolService:YschoolService){

   }

  lstcomments: Comments[] = [];

  ngOnInit(){
    let name= this.yschoolService.fetchData();
    console.log (name);
  }
}
