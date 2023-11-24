import { IssueRepository } from "../../../domain/repository/issue-repository";
import { IssueRepositoryImpl } from "../../../infrastructure/repository/issue-repository";
import { CreateIssueUseCase } from "../../use-cases/issue/create/create-use-case";
import { Request, Response } from 'express';


export class CraeteIssueController {

    private createBookUseCase:CreateIssueUseCase


    constructor(){
        const issueRepository=new IssueRepositoryImpl()
        this.createBookUseCase=new CreateIssueUseCase(issueRepository);
    }


    async createIssue(req:Request,res:Response){
        try {
            const { id,bookId,
                studentId,
                issueDate,
                returnDate,
                status}=req.body


                if(!status){

                    return res.json({message:"Status is Required"});
                }

           const issue= await  this.createBookUseCase.execute({
                bookId,
                studentId,
                issueDate,
                returnDate,
                status,
                id
            })
            console.log(issue)

            return res.json(issue);

        } catch (error) {
            res.status(400).json({message:"Something went wrong "});
        }

    }
}