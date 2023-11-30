import { IssueRepositoryImpl } from "../../../infrastructure/repository/issue-repository";
import { ReturnIssueUseCase } from "../../use-cases/issue/return-use-case";
import { Request, Response } from 'express';

export class ReturnIssueController {

    private returnIssueUseCase: ReturnIssueUseCase;

    constructor() {
        const issueRepository = new IssueRepositoryImpl();
        this.returnIssueUseCase = new ReturnIssueUseCase(issueRepository);
    }

    async returnIssue(req: Request, res: Response) {
        try {

            const {id}=req.params
            const {  bookId,studentId,issueDate,returnDate,status}=req.body
            const returnedIssue = await this.returnIssueUseCase.execute({id, bookId,studentId,issueDate,returnDate,status});

            return res.json(returnedIssue);

        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
