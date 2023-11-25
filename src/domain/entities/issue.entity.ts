
export interface IssueAttributes {
    id: string;
    bookId: string;
    studentId: string;
    issueDate: Date;
    returnDate: Date;
    status: string;
    createdAt?:string;
    updatedAt?:string;
}

export class Issue {
    private _id: string
    private _bookId: string
    private _studentId: string
    private _issueDate: Date
    private _returnDate: Date
    private _status: string
    private _createdAt?:Date
    private _updatedAt?:Date

    constructor(
        props: IssueAttributes) {
        this._id = props.id;
        this._bookId = props.bookId;
        this._studentId = props.studentId;
        this._issueDate = props.issueDate;
        this._returnDate = props.returnDate;
        this._status = props.status;
        this._createdAt=props.createdAt ? new Date(props.createdAt) : undefined
        this._updatedAt=props.updatedAt ? new Date(props.updatedAt) :undefined
    }

    get id(): string {
        return this._id;
    }
    get bookId(): string {
        return this._bookId;
    }
    get studentId(): string {
        return this._studentId;
    }
    get issueDate(): Date  {
        return this._issueDate;
    }
    get returnDate(): Date{
        return this._returnDate;
    }
    get status(): string {
        return this._status;
    }

    get createdAt(): Date {
        return this._createdAt!
    }
    get updatedAt(): Date {
        return this._updatedAt!
    }

    toJSON(): IssueAttributes{
        return {
            id: this._id,
            bookId: this._bookId,
            studentId:this._studentId,
            issueDate: this._issueDate,
            returnDate: this._returnDate,
            status: this._status,
            createdAt:  this._createdAt?.toISOString() ,
            updatedAt: this._updatedAt?.toISOString()
        }   
    }

    public static IssueProperties(props:IssueAttributes):Issue{
        return new Issue(props);
    
    }
}


