
export interface AuthorAttributes {
  id: string;
  firstName: string;
  lastName: string;
  createdAt?:string
  updatedAt?:string

}

export class Author {

  private  _id: string;
  private  _firstName: string;
  private  _lastName: string;
  private _createdAt?:Date;
  private _updatedAt?:Date


  constructor(props:AuthorAttributes) {
    this._id=props.id
    this._firstName=props.firstName
    this._lastName=props.lastName
    this._createdAt=props.createdAt ? new Date(props.createdAt) :undefined
    this._updatedAt=props.updatedAt ? new Date(props.updatedAt):undefined;
  }

  get id():string{
    return this._id;
  }
  get firstName():string{
    return this._firstName;
  }
  get lastName():string{
    return this._lastName;
  }

  get createdAt():Date | undefined{
    return this._createdAt
  }

  get updatedAt():Date | undefined{
    return this._updatedAt
  }

  toJSON():AuthorAttributes{
    return{
      id:this._id,
      firstName:this._firstName,
      lastName:this._lastName,
      createdAt:this._createdAt?.toISOString(),
      updatedAt:this._updatedAt?.toISOString()

    }
  }

  public static CreateProperties(props:AuthorAttributes):Author{
    return new Author(props)
  }

}


