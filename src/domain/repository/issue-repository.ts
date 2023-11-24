import { Issue } from "../entities/issue.entity";

export interface IssueRepository{
    getBorrow(id:string):Promise<Issue>;
    getBorrows():Promise<Issue[]>;
    createBorrow(isue:Issue):Promise<Issue>;
    updateBorrow(borrow:Issue):Promise<Issue>;
    deleteBorrow(id:string):Promise<void>;

}