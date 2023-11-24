import { Issue } from '../../../domain/entities/issue.entity';
import { IssueRepository } from "../../../domain/repository/issue-repository";


export type CreateIssueRequest = {
    id:string
    bookId: string;
    studentId: string;
    status:string;
    issueDate:Date;
    returnDate:Date;
}

export type CreateUserResponse = Promise<void> | Promise<string>

export interface UseCase<Params,Response> {
    execute(request: Params): Promise<Response>;
}

export class CreateIssueUseCase implements UseCase<CreateIssueRequest, CreateUserResponse>  {



    constructor(
        private readonly issueRepository: IssueRepository
    ) { }


    async execute(request: CreateIssueRequest): Promise<CreateUserResponse> {

        const new_isse= Issue.IssueProperties({
            bookId: request.bookId, studentId: request.studentId,
            id:request.id,
            issueDate: request.issueDate,
            returnDate: request.returnDate,
            status: request.status
        });

        await this.issueRepository.createBorrow(new_isse);



    }
}