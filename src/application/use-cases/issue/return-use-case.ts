import { IssueRepository } from "../../../domain/repository/issue-repository";
import { IssueResponse } from './reponse';
import { IssueMapper } from '../../mappers/issue-mapper';
import { Issue } from "../../../domain/entities/issue.entity";
import { IssueRequest } from "./request";

export class ReturnIssueUseCase {
    constructor(private readonly issueRepository: IssueRepository) { }

    async execute(request :IssueRequest): Promise<IssueResponse> {

        const mappedIssues= IssueMapper.toEntity(request);
        return  await this.issueRepository.returnIssue(mappedIssues);
    }
}
