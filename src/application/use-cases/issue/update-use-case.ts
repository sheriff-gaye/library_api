import { IssueRepository } from "../../../domain/repository/issue-repository";
import { IssueMapper } from '../../mappers/issue-mapper';
import { IssueResponse } from "./reponse";
import { IssueRequest } from "./request";

export class UpdateIssueUseCase {

    constructor(private issueRepository: IssueRepository) { }

    async execute(request: IssueRequest): Promise<IssueResponse> {
        const issue = await this.issueRepository.updateIssue(IssueMapper.toEntity(request));
        return issue
    }
}