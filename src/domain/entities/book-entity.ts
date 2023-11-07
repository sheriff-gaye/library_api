export interface BookAttributes{
    id?: string;
    title?: string;
    description?:Text;
    publisher?:string;
    publish_date?:Date;
    copies?:number
}


export class Books{
    constructor(
        public id:string,
        public title:string,
        public description:Text,
        public publish_date:Date,
        public publisher:string,
        public copies:number
        ){}

}