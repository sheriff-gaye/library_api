import { Issue } from "../../../domain/entities/issue.entity";
import { IssueRepository } from "../../../domain/repository/issue-repository";

export class GetAllIssueUseCase{

    constructor(private issueRepository:IssueRepository){}

    async execute():Promise<Issue []>{

        const issue=await this.issueRepository.getIssues();
        return issue;

    }
}