import { IssueRepository } from "../../../domain/repository/issue-repository";
import {  IssueResponse } from './reponse';
import {  IssueRequest } from './request';
import { IssueMapper } from '../../mappers/issue-mapper';

export class CreateIssueUseCase   {
    
    constructor(private readonly issueRepository: IssueRepository) { }

    async execute(request: IssueRequest): Promise<IssueResponse> {
        const new_isse= IssueMapper.toEntity(request);
       return await this.issueRepository.createIssue(new_isse);

    }
}