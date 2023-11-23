import { AuthRepositoryImpl } from '../../../infrastructure/repository/auth-repository';
import { UserRepositoryImpl } from '../../../infrastructure/repository/user-repository';
import { LogoutUseCase } from '../../use-cases/Users/logout-use-case';
import { Request, Response } from 'express';


export class LogoutController {

    private logoutUseCase: LogoutUseCase

    constructor(){
        const userRepository=new AuthRepositoryImpl();
        this.logoutUseCase=new LogoutUseCase(userRepository);

    }

    async Logout(req:Request,res:Response):Promise<void>{

        try {
            const {id}=req.params

            if(!id){
                res.status(400).json({message:"User Id is Required"});
            }

            await this.logoutUseCase.execute(id);
            res.cookie('token', '', { httpOnly: true, expires: new Date(0) });

            res.status(200).json({message:"User Logout Successfully"});
            
        } catch (error) {

            res.status(400).json({message:"Something went wrong"});
            
        }
    }

}