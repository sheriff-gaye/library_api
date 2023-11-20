import { UserRepositoryImpl } from "../../../infrastructure/repository/user-repository";
import { UpdateUserUseCase } from "../../use-cases/Users/update-use-case";
import { Request, Response } from 'express';


export class UpdateUserController{

    private updateUserUseCase:UpdateUserUseCase

    constructor(){
        const userRepository=new UserRepositoryImpl();
        this.updateUserUseCase=new UpdateUserUseCase(userRepository);
    }

    async updateUser(req:Request,res:Response){
        try {
            const {id}=req.params
            const {fullName,email,password}=req.body

            const user=await this.updateUserUseCase.execute(id,fullName,email,password);
            res.status(200).json(user);
            
        } catch (error) {
            res.status(400).json({message:"Something went wrong"});
            
        }
    }
}