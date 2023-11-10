
export interface StudentsAttributes{
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    phone:string;
    gender:string;
    dob:Date
    levelId:string
    studentId:string

}



export class Student {
}


export class Students{
    constructor(
        public id: string,
        public firstname:string,
        public lastname:string,
        public email:string,
        public phone:number,
        public gender:boolean,
        public dob:Date,
        public levelId:string,
        public studentId:string
        
    ){}
}