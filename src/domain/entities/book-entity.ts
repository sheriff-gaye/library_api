export interface BookAttributes{
    id: string;
    title: string;
    description:Text;
    publisher:string;
    publish_date:Date;
    copies:number
    authorId:string;
    categoryId:string
    createdAt?:string
    updatedAt?:string

}


export class Books{
    private _id:string;
    private _title:string;
    private _description:Text;
    private _publish_date:Date;
    private _publisher:string;
    private _copies:number;
    private _authorId:string;
    private _categoryId:string
    private _createdAt?:Date;
    private _updatedAt?:Date;


    private constructor(props:BookAttributes){
        this._id = props.id;
        this._title = props.title;
        this._description = props.description;
        this._publisher = props.publisher;
        this._publish_date = props.publish_date;
        this._copies = props.copies;
        this._authorId = props.authorId;
        this._categoryId = props.categoryId;
        this._createdAt = props.createdAt ? new Date(props.createdAt): undefined;
        this._updatedAt = props.updatedAt? new Date(props.updatedAt): undefined;
    }

    get id():string{
        return this._id;
    }
    get title():string{
        return this._title;
    }
    get description():Text{
        return this._description;
    }
    get publisher():string{
        return this._publisher;
    }
    get publish_date():Date{
        return this._publish_date;
    }
    get copies():number{
        return this._copies;
    }
    get authorId():string{
        return this._authorId;
    }
    get categoryId():string{
        return this._categoryId;
    }
    get createdAt():Date | undefined{
        return this._createdAt;

    }
    get updatedAt():Date | undefined {
        return this._updatedAt;
    }

    toJSON():BookAttributes{
        return {
            id: this._id,
            title: this._title,
            description: this._description,
            publisher: this._publisher,
            publish_date: this._publish_date,
            copies: this._copies,
            authorId: this._authorId,
            categoryId: this._categoryId,
            createdAt: this._createdAt?.toISOString(),
            updatedAt: this._updatedAt?.toISOString()
        }
    }

    public static CreateProperties(props:BookAttributes):Books{
        return new Books(props);
        
    }

}