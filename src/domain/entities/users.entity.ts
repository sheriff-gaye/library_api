
export interface UserAttributes {
    id?: string;
    fullName?:string;
    email: string;
    password: string;
}
export class User implements UserAttributes {
    public id!: string;
    public fullName!:string;
    public email!: string;
    public password!: string;
}