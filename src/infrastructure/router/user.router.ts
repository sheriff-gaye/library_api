import express from 'express';
import { CreateUserController } from '../../application/controllers/users/create-controller';
import { GetAllUsersController } from '../../application/controllers/users/getAll-controller';
import { UpdateUserController } from '../../application/controllers/users/update-controller';
import { DeleteUserController } from '../../application/controllers/users/delete-controller';
import { LoginController } from '../../application/controllers/users/login-controller';
import { LogoutController } from '../../application/controllers/users/logout-controller';
import { findUserByidController } from '../../application/controllers/users/findbyId-controller';

const userRouter=express.Router();


const createUserController=new CreateUserController();
const getUserController=new GetAllUsersController();
const updateUserController=new UpdateUserController();
const deleteUserController=new DeleteUserController();
const loginController=new LoginController();
const logoutController=new LogoutController();
const getUserById=new findUserByidController();


userRouter.post('/register',(req,res)=>createUserController.createUser(req,res));
userRouter.post('/login',(req,res)=>loginController.login(req,res))
userRouter.get('/users',(req,res)=>getUserController.getusers(req,res));
userRouter.patch('/user/:id',(req,res)=>updateUserController.updateUser(req,res));
userRouter.delete('/user/:id',(req,res)=>deleteUserController.deleteUser(req,res));
userRouter.get('/logout/:id' ,(req,res)=>logoutController.Logout(req,res));
userRouter.get('/user/:id',(req,res)=>getUserById.findById(req,res));

export default userRouter;