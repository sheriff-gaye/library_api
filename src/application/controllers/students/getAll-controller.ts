import { StudentRepositoryImpl } from "../../../infrastructure/repository/students-repository"
import { GetAllStudentsUseCase } from "../../use-cases/Students/get-all-use-case"
import { Request, Response } from 'express';


export class GetAllStudentController {

    private getAllStudentsUseCase: GetAllStudentsUseCase

    constructor() {
        const studentsRrpository = new StudentRepositoryImpl();
        this.getAllStudentsUseCase = new GetAllStudentsUseCase(studentsRrpository);

    }

    async getStudents(req: Request, res: Response) {

        try {
            const allStudents = await this.getAllStudentsUseCase.execute()
            res.status(200).json(allStudents);

        } catch (error: any) {
            return res.status(400).json({ error: error.message });

        }

    }
}