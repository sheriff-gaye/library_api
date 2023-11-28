import { IssueRepositoryImpl } from "../../../infrastructure/repository/issue-repository";
import { UpdateIssueUseCase } from "../../use-cases/issue/update-use-case";
import { Request,Response } from "express";

export class UpdateIssueController {

    private updateIssueUseCase:UpdateIssueUseCase

    constructor(){
        const issueRepository=new IssueRepositoryImpl()
        this.updateIssueUseCase=new UpdateIssueUseCase(issueRepository);
    }

    async updateIssue(req:Request,res:Response){
        try {
            const {id}=req.params
            const {  bookId,studentId,issueDate,returnDate,status}=req.body
            const issue=await this.updateIssueUseCase.execute({id, bookId,studentId,issueDate,returnDate,status});
            
            return res.status(200).json(issue);
            
        } catch (error:any) {
            return res.status(400).json({error:error.message});   
        }
    }
}