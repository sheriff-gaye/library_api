import { StudentRepositoryImpl } from "../../../infrastructure/repository/students-repository";
import { CreateStudentUseCase } from "../../use-cases/Students/create-use-case";
import { Request, Response } from 'express';

export class CreateStudentController {
    private createStudentUseCase: CreateStudentUseCase;

    constructor() {
        const studentsRepository = new StudentRepositoryImpl();
        this.createStudentUseCase = new CreateStudentUseCase(studentsRepository);
    }

    async createStudent(req: Request, res: Response) {
        try {
            const {firstname,lastname,email,phone,gender,dob,levelId, studentId} = req.body;
            if(!levelId)res.json({message:"Level is Required"});

            const newStudent = await this.createStudentUseCase.execute({firstname,lastname,email,phone,gender,dob, levelId,studentId});
            res.status(200).json(newStudent);  
        } catch (error: any) {
            console.log(error)

            return res.status(400).json({ error: error.message });
           

        }
    }
}
