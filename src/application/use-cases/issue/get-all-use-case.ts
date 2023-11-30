import { Issue } from "../../../domain/entities/issue.entity";
import { IssueRepository } from "../../../domain/repository/issue-repository";

export class GetAllIssueUseCase{

     constructor(private issueRepository:IssueRepository){}

    async execute(search?: string):Promise<Issue []>{

        console.log("Use case", search );

        const issue=await this.issueRepository.getIssues(search);
        return issue;

    }
}