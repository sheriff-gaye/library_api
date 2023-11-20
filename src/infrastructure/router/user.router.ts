import express from 'express';
import { CreateUserController } from '../../application/controllers/users/create-controller';
import { GetAllUsersController } from '../../application/controllers/users/getAll-controller';
import { UpdateUserController } from '../../application/controllers/users/update-controller';
import { DeleteUserController } from '../../application/controllers/users/delete-controller';


const userRouter=express.Router();


const createUserController=new CreateUserController();
const getUserController=new GetAllUsersController();
const updateUserController=new UpdateUserController();
const deleteUserController=new DeleteUserController();




userRouter.post('/register',(req,res)=>createUserController.createUser(req,res));
userRouter.get('/users',(req,res)=>getUserController.getusers(req,res));
userRouter.patch('/user/:id',(req,res)=>updateUserController.updateUser(req,res));
userRouter.delete('/user/:id',(req,res)=>deleteUserController.deleteUser(req,res))

export default userRouter;