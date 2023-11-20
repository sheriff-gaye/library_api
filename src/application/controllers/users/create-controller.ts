import { UserRepositoryImpl } from "../../../infrastructure/repository/user-repository";
import { CreateUserUseCase } from "../../use-cases/Users/create-use-case";
import { Request, Response } from 'express';


export class CreateUserController{
    private createUserUseCase:CreateUserUseCase


    constructor(){
        const userRepository=new UserRepositoryImpl();
        this.createUserUseCase=new CreateUserUseCase(userRepository);
    }

    async createUser(req:Request,res:Response){
        try {
            const { fullName, email, password } = req.body;

            // Use the CreateUserUseCase to create a new user
            const user = await this.createUserUseCase.execute(fullName, email, password);

            // Respond with the created user
            res.json(user);
        } catch (error) {
            // Handle errors
            res.status(400).json({ message: "Something went wrong", error });
        }

    }
}