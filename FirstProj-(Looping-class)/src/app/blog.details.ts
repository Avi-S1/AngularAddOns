class BlogDetails{
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