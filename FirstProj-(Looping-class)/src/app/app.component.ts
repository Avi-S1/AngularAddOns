import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Stories" ;
  blogArray= [blog1,blog2,blog3];

}
export class BlogDetails{
  topic:string;
  date:string;
  content:string;
  category:string;
  subcategory:string;

  constructor(topicAr:string, dateAr:string, contentAr:string, categoryAr:string, subcategoryAr:string){
      this.topic=topicAr;
      this.date=dateAr;
      this.content=contentAr;
      this.category=categoryAr;
      this.subcategory=subcategoryAr;
  }
}
  
let blog1= new BlogDetails("The King's Doubt", "May 16 , 2018 by Odisha History", " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maiores inventore ea! Commodi beatae totam, expedita qui maiores omnis repellat architecto quaerat quae at minima modi, incidunt hic molestias distinctio! ", "Chandamama Stories", "Short Stories" );
let blog2= new BlogDetails("Why He Worked Hard?", "May 15 , 2017 by Odisha History", " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maiores inventore ea! Commodi beatae totam, expedita qui maiores omnis repellat architecto quaerat quae at minima modi, incidunt hic molestias distinctio! ","Chandamama Stories", " " );
let blog3= new BlogDetails("Who was Wrong?", "April 26 , 2016 by Odisha History", " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maiores inventore ea! Commodi beatae totam, expedita qui maiores omnis repellat architecto quaerat quae at minima modi, incidunt hic molestias distinctio! ","Ramayan Stories", "Long Stories" );
