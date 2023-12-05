import bcrypt from 'bcrypt';

export interface UserAttributes {
    id: string;
    fullName: string;
    email: string;
    password: string;
    phone?:number;
    address?:string;
    location?:string;
    profile?:string
    createdAt?:string;
    updatedAt?:string;
}
export class User {

    private _id: string;
    private _fullName: string;
    private _email: string;
    private _password: string;
    private _phone:number;
    private _address:string;
    private _profile:string;
    private _location:string;
    private _createdAt?:Date
    private _updatedAt?:Date

    
    
    constructor(props:UserAttributes) {
        this._id=props.id
        this._fullName=props.fullName
        this._email=props.email
        this._password=props.password
        this._phone=props.phone!
        this._address=props.address!
        this._profile=props.profile!
        this._location=props.location!
        this._createdAt=props.createdAt ? new Date(props.createdAt) : undefined
        this._updatedAt=props.updatedAt ? new Date(props.updatedAt) :undefined
     }

     get id():string{
        return this._id
     }

     get email():string{
        return this._email
     }
     get fullName():string{
        return this._fullName
     }

    get password(): string {
        return this._password;
      }

    get phone():number{
      return this._phone  
    }
    get address():string{
      return this._address
    }
    get location():string{
      return this._location
    }

    get profile():string{
      return this._profile
    }

    get createdAt(): Date {
        return this._createdAt!
    }
    get updatedAt(): Date {
        return this._updatedAt!
    }
    
      async setPassword(password: string): Promise<void> {
        this._password = await bcrypt.hash(password, 9);
      }
    
      verifyPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
      }

      toJSON():UserAttributes{
        return{
            id:this._id,
            fullName:this._fullName,
            email:this._email,
            password:this._password,
            phone:this._phone,
            address:this._address,
            location:this._location,
            createdAt:this._createdAt?.toISOString(),
            updatedAt:this._updatedAt?.toISOString()
            
        }
      }

      public static UserProperties(props:UserAttributes):User{
        return new User(props);
      }


}

