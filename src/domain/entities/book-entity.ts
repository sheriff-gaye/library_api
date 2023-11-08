export interface BookAttributes{
    id?: string;
    title?: string;
    description?:Text;
    publisher?:string;
    publish_date?:Date;
    copies?:number
    authorId?:string;
    categoryId?:string
}


export class Books{
    constructor(
        public id:string,
        public title:string,
        public description:Text,
        public publish_date:Date,
        public publisher:string,
        public copies:number,
        public authorId:string,
        public categoryId:string
        ){}

}