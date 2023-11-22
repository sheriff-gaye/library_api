import { UserRepositoryImpl } from "../../../infrastructure/repository/user-repository";
import { CreateUserUseCase } from "../../use-cases/Users/create-use-case";
import { Request, Response } from 'express';


export class CreateUserController {
    private createUserUseCase: CreateUserUseCase


    constructor() {
        const userRepository = new UserRepositoryImpl();
        this.createUserUseCase = new CreateUserUseCase(userRepository);
    }

    async createUser(req: Request, res: Response) {
        try {
            const { fullName, email, password } = req.body;
            if(!fullName){
                return res.status(401).json({message:"Fullname is required"})
            }
            if(!email ){
                return res.status(401).json({message:"Email is required"})
            }
            if(!password ){
                return res.status(401).json({message:"Password is required"})
            }
            
            const user = await this.createUserUseCase.execute(fullName, email, password);
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: "Something went wrong"});
        }

    }
}