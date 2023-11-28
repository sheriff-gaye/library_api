import { IssueRepositoryImpl } from "../../../infrastructure/repository/issue-repository";
import { CreateIssueUseCase } from "../../use-cases/issue/create-use-case";
import { Request, Response } from 'express';

export class CraeteIssueController {

    private createBookUseCase:CreateIssueUseCase

    constructor(){
        const issueRepository=new IssueRepositoryImpl()
        this.createBookUseCase=new CreateIssueUseCase(issueRepository);
    }

    async createIssue(req:Request,res:Response){
        try {
                
           const issue= await  this.createBookUseCase.execute({...req.body})
            
            return res.json(issue);

        } catch (error:any) {
            res.status(400).json({error:error.message});
        }

    }
}