import { UserRepositoryImpl } from "../../../infrastructure/repository/user-repository";
import { GetAllUsersUseCase } from "../../use-cases/Users/get-all-use-case";
import { Request, Response } from 'express';

export class GetAllUsersController {

    private getAllUserUseCase:GetAllUsersUseCase

    constructor(){
        const userRepository=new UserRepositoryImpl();
        this.getAllUserUseCase=new GetAllUsersUseCase(userRepository);
    }

    async getusers(req:Request,res:Response){


        try {
            const users = await this.getAllUserUseCase.execute()
            res.status(200).json(users);
            
        } catch (error) {

            res.status(400).json({message:"Something went wrong"});
            
        }
    }



}