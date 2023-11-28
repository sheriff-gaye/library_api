import { Issue } from "../entities/issue.entity";

export interface IssueRepository{
    getIssue(id:string):Promise<Issue>;
    getIssues():Promise<Issue[]>;
    createIssue(isue:Issue):Promise<Issue>;
    updateIssue(isssue:Issue):Promise<Issue | null>;
    deleteIssue(id:string):Promise<void>;

}