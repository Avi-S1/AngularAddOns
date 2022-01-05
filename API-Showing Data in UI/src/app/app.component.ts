import { Component } from '@angular/core';

import { FreeapiService } from './services/freeapi.service';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private _freeApiService: FreeapiService){ }

  lstcomments: Comments[] = [];

  ngOnInit(){
    this._freeApiService.getcomments()
    .subscribe(
      data=>{
        this.lstcomments = data;

      }
    );
  }
}
