import express from 'express';
import { CreateUserController } from '../../application/controllers/users/create-controller';
import { GetAllUsersController } from '../../application/controllers/users/getAll-controller';


const userRouter=express.Router();


const createUserController=new CreateUserController();
const getUserController=new GetAllUsersController();




userRouter.post('/register',(req,res)=>createUserController.createUser(req,res));
userRouter.get('/users',(req,res)=>getUserController.getusers(req,res));


export default userRouter;