import { Issue } from '../../../../domain/entities/issue.entity';
import { IssueRepository } from "../../../../domain/repository/issue-repository";
import {   CreateUserResponse } from './reponse';
import { UseCase } from '../../index';
import { CreateIssueRequest } from './request';
import { IssueMapper } from '../../../mappers/issue-mapper';

export class CreateIssueUseCase implements UseCase<CreateIssueRequest, CreateUserResponse>  {
    
    constructor(private readonly issueRepository: IssueRepository) { }

    async execute(request: CreateIssueRequest): Promise<CreateUserResponse> {
        const new_isse= IssueMapper.toEntity(request);
       return await this.issueRepository.createBorrow(new_isse);

    }
}