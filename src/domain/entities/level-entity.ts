
export interface LevelAttributes{
    id:string;
    code:string;
    name:string;
    createdAt?:string;
    updatedAt?:string;
}

export class Level{
    private _id:string;
    private _code:string;
    private _name:string;
    private _createdAt?:Date;
    private _updatedAt?:Date;


    constructor(props:LevelAttributes){
        this._id = props.id;
        this._code = props.code;
        this._name = props.name;
        this._createdAt = props.createdAt ? new Date(props.createdAt) : undefined
        this._updatedAt = props.updatedAt ? new Date(props.updatedAt) : undefined
    }

    get id():string{
        return this._id;
    }
    get code():string{
        return this._code;
    }
    get name():string{
        return this._name;
    }
    get createdAt():Date{
        return this._createdAt!;
    }
    get updatedAt():Date{
        return this._updatedAt!;
    }
    toJSON():LevelAttributes{
        return{
            id:this._id,
            code:this._code,
            name:this._name,
            createdAt:this._createdAt?.toISOString(),
            updatedAt:this._updatedAt?.toISOString()
        }
    }

    public static CreateProperties(props:LevelAttributes):Level{
        return new Level(props)
    }
}