import { IssueRepositoryImpl } from "../../../infrastructure/repository/issue-repository";
import { GetAllIssueUseCase } from "../../use-cases/issue/get-all-use-case";
import { Request, Response } from "express";

export class GetAllIssueController {

    private getAllIssueUseCase: GetAllIssueUseCase

    constructor() {
        const issueRepository = new IssueRepositoryImpl();
        this.getAllIssueUseCase = new GetAllIssueUseCase(issueRepository);
    }


    async getAllIssues(req: Request, res: Response) {
        try {
            const issues = await this.getAllIssueUseCase.execute()
            return res.status(200).json(issues);

        } catch (error: any) {
            res.status(400).json({ error: error.message })

        }
    }
}