

export interface IssueAttributes {
    id: string;
    bookId: string;
    studentId: string;
    issueDate: Date;
    returnDate: Date;
    status: string;
}

export class Issue {
    private _id: string
    private _bookId: string
    private _studentId: string
    private _issueDate: Date
    private _returnDate: Date
    private _status: string

    constructor(
        props: IssueAttributes) {
        this._id = props.id;
        this._bookId = props.bookId;
        this._studentId = props.studentId;
        this._issueDate = props.issueDate;
        this._returnDate = props.returnDate;
        this._status = props.status;
    }

    get id(): string {
        return this._id;
    }
    get bookId(): string {
        return this.bookId;
    }
    get studentId(): string {
        return this._studentId;
    }
    get issueDate(): Date {
        return this._issueDate;
    }
    get returnDate(): Date {
        return this._returnDate;
    }
    get status(): string {
        return this._status;
    }


    public static IssueProperties(props:IssueAttributes):Issue{
        return new Issue(props);
    
    }
}


