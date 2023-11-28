import { IssueRepositoryImpl } from "../../../infrastructure/repository/issue-repository";
import { DeleteIssueUseCase } from "../../use-cases/issue/delete-use-case";
import { Request,Response } from "express";

export class  DeleteIssueController{

    private deleteIssueUseCase:DeleteIssueUseCase

    constructor(){
        const issueRepository=new IssueRepositoryImpl();
        this.deleteIssueUseCase=new DeleteIssueUseCase(issueRepository);
    }

    async deleteIssue(req:Request ,res:Response){
        try {

            const {id}=req.params
            await this.deleteIssueUseCase.exeute(id);
            return res.status(200).json({message:"Deleted Sucessfully"});
            
        } catch (error:any) {
            return res.status(400).json({error:error.message});
            
        }
    }

}