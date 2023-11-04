

export class Books{
    constructor(
        public id:string,
        public title:string,
        public description:string,
        public author:string,
        public category:string,
        public publish_date:Date,
        public publisher:string,
        public copies:number
        ){}

}