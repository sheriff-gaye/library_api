import { ReturnIssue } from "../entities/return-entity";

export interface ReturnIssueRepository{
    createReturn(data:ReturnIssue):Promise<ReturnIssue>
    getReturn():Promise<ReturnIssue[]>
}