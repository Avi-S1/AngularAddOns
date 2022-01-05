import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YschoolService {
  
  constructor(private client:HttpClient) { }
  fetchData(){


  this.client.get("https://api.yschool.in/enums_resource").subscribe(this.getResponseData);

  
  }
  getResponseData(response:any){
    console.log("api called");
    let str=JSON.stringify(response);
    console.log(str);
  }
}
