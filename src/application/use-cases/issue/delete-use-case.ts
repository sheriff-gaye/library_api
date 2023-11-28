import { IssueRepository } from '../../../domain/repository/issue-repository';

export class DeleteIssueUseCase{

    constructor(private readonly issueRepository:IssueRepository){}

    async exeute(id:string):Promise <void>{
        const issue =await this.issueRepository.deleteIssue(id);
        return issue;
    }
}