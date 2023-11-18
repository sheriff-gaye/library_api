import bcrypt from 'bcrypt';

export interface UserAttributes {
    id?: string;
    fullName?:string;
    email?: string;
    password?: string;
}
export class User  {
    constructor(
    public id:string,
    public fullName:string,
    public email: string,
    private _password: string,
    ){}


    get password():string{
        return this._password
    }

    setPassword(password:string):void{
        const saltRounds=10
        const hashedPassword=bcrypt.hashSync(password, saltRounds);
        this._password=hashedPassword;

    }

    verifyPassword(password:string):boolean{
        return bcrypt.compareSync(password,this._password);

    }
}

