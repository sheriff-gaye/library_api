import { StudentRepositoryImpl } from "../../../infrastructure/database/repository/students-repository";
import { GetOneStudentUseCase } from "../../use-cases/Students/get-one-ue-case";
import { Response,Request } from "express";

export class GetOneStudentController{

    private getOneStudentUseCase:GetOneStudentUseCase;

    constructor(){
        const stuentsRepository=new StudentRepositoryImpl();
        this.getOneStudentUseCase=new GetOneStudentUseCase(stuentsRepository);
    }

    async getonestudent(req:Request,res:Response){
        try{
            const {id}=req.params
            const result=await this.getOneStudentUseCase.execute(id);
            res.json(result)
        }
        catch(error){
            res.status(400).json({message:"Something went wrong"});
        }
    }
}