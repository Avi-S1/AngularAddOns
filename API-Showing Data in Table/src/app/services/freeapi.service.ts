import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpclient: HttpClient) { }

  getcomments(): Observable<any>{


    return this.httpclient.get( "https://jsonplaceholder.typicode.com/posts/1/comments")
  }
}
