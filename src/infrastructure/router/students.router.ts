import express from "express";
import { CreateStudentController } from "../../application/controllers/students/create-controller";
import { GetAllStudentController } from "../../application/controllers/students/getAll-controller";


const studentRouter=express.Router();



const createStudentsController=new CreateStudentController();
const getAllstudentsController=new GetAllStudentController();

studentRouter.post('/students',(req,res)=>createStudentsController.createStudent(req,res));
studentRouter.get('/students',(req,res)=>getAllstudentsController.getStudents(req,res));


export default studentRouter