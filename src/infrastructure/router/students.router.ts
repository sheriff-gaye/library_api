import express from "express";
import { CreateStudentController } from "../../application/controllers/students/create-controller";
import { GetAllStudentController } from "../../application/controllers/students/getAll-controller";
import { GetOneStudentController } from "../../application/controllers/students/getOne-controller";


const studentRouter=express.Router();



const createStudentsController=new CreateStudentController();
const getAllstudentsController=new GetAllStudentController();
const getOneStudentsController=new GetOneStudentController();

studentRouter.post('/createstudents',(req,res)=>createStudentsController.createStudent(req,res));
studentRouter.get('/students',(req,res)=>getAllstudentsController.getStudents(req,res));
studentRouter.get('/students/:id',(req,res)=>getOneStudentsController.getonestudent(req,res));

export default studentRouter