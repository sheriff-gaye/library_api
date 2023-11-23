import { UserRepositoryImpl } from "../../../infrastructure/repository/user-repository";
import { DeleteUserUseCase } from "../../use-cases/Users/delete-use-case";
import { Request, Response } from 'express';

export class DeleteUserController{

    private deleteUserUseCase:DeleteUserUseCase

    constructor(){
        const userRepository=new UserRepositoryImpl();
        this.deleteUserUseCase = new DeleteUserUseCase(userRepository);
    }

    async deleteUser(req:Request,res:Response){
        try {
            const {id}=req.params
            await this.deleteUserUseCase.execute(id);
            res.status(200).json({message:"User Deleted Sucessfully"});
            
        } catch (error) {
            res.status(400).json({message:"Something went wrong"});
            
        }
    }
}