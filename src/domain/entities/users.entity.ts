import bcrypt from 'bcrypt';

export interface UserAttributes {
    id: string;
    fullName: string;
    email: string;
    password: string;
}
export class User {
    constructor(
        public id: string,
        public fullName: string,
        public email: string,
        private _password: string,
    ) { }

    get password(): string {
        return this._password;
      }
    
      async setPassword(password: string): Promise<void> {
        this._password = await bcrypt.hash(password, 9);
      }
    
      verifyPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
      }


}

