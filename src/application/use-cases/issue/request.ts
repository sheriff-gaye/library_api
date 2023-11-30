export type IssueRequest = {
    id?:string
    bookId: string;
    studentId: string;
    status?:string;
    issueDate?:Date;
    returnDate:Date;
}