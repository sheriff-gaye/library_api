import { Issue } from "../../domain/entities/issue.entity";
import { IssueRepository } from "../../domain/repository/issue-repository";
import { IssueModel } from '../database/model/issue-model';
import { IssueMapper } from '../../application/mappers/issue-mapper';


export class IssueRepositoryImpl implements IssueRepository{

 
    updateBorrow(borrow: Issue): Promise<Issue> {
        throw new Error("Method not implemented.");
    }
    deleteBorrow(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getBorrow(id: string): Promise<Issue> {
        throw new Error("Method not implemented.");
    }
    getBorrows(): Promise<Issue[]> {
        throw new Error("Method not implemented.");
    }
    async createBorrow(issue: Issue): Promise<Issue> {
        const mappedIssue = IssueMapper.toDB(issue);
        const newissue=await IssueModel.create(mappedIssue);
        return IssueMapper.toEntity(newissue);
       
    }
    

}