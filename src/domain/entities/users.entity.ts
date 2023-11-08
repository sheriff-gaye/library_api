
export interface UserAttributes {
    id?: string;
    email: string;
    password: string;
}
export class User implements UserAttributes {
    public id!: string;
    public email!: string;
    public password!: string;
}