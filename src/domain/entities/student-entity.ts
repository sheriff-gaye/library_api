
export interface StudentsAttributes {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: string;
    dob: Date;
    levelId: string;
    studentId: string;
    createdAt?: string;
    updatedAt?: string;

}

export class Students {
    private _id: string;
    private _firstname: string;
    private _lastname: string;
    private _email: string;
    private _phone: string;
    private _gender: string;
    private _dob: Date;
    private _levelId: string;
    private _studentId: string
    private _createdAt?: Date;
    private _updatedAt?: Date;

    constructor(props: StudentsAttributes) {
        this._id = props.id;
        this._firstname = props.firstname;
        this._lastname = props.lastname;
        this._email = props.email;
        this._phone = props.phone;
        this._gender = props.gender;
        this._dob = props.dob;
        this._levelId = props.levelId;
        this._studentId = props.studentId;
        this._createdAt = props.createdAt ? new Date(props.createdAt) : undefined
        this._updatedAt = props.updatedAt ? new Date(props.updatedAt) : undefined
    }

    get id(): string {
        return this._id;
    }
    get firstname(): string {
        return this._firstname;
    }
    get lastname():string{
        return this._lastname;
    }
    get email(): string {
        return this._email;
    }
    get phone():string{
        return this._phone;
    }
    get gender():string{
        return this._gender;
    }
    get dob():Date{
        return this._dob;
    }
    get levelId():string{
        return this._levelId;
    }
    get studentId():string{
        return this._studentId;
    }
    get createdAt():Date{
        return this._createdAt!
    }
    get updatedAt():Date{
        return this._updatedAt!
    }
    toJSON():StudentsAttributes{
        return{
            id:this._id,
            firstname:this._firstname,
            lastname:this._lastname,
            email:this._email,
            phone:this._phone,
            gender:this._gender,
            dob:this._dob,
            levelId:this._levelId,
            studentId:this._studentId,
            createdAt:this._createdAt?.toISOString(),
            updatedAt:this._updatedAt?.toISOString()
        }
    }
    public static CreateProperties(props:StudentsAttributes):Students{
        return new Students(props)
    }


}