import { StudentRepositoryImpl } from "../../../infrastructure/repository/students-repository"
import { GetAllStudentsUseCase } from "../../use-cases/Students/get-all-use-case"
import { Request, Response } from 'express';


export class GetAllStudentController {

    private getAllStudentsUseCase: GetAllStudentsUseCase

    constructor() {
        const studentsRrpository = new StudentRepositoryImpl();
        this.getAllStudentsUseCase = new GetAllStudentsUseCase(studentsRrpository);

    }

    async getStudents(rqe: Request, res: Response) {

        try {
            const allStudents = await this.getAllStudentsUseCase.execute()
            res.status(200).json(allStudents);

        } catch (error) {
            res.status(400).json({ message: "Something went wrong" });

        }

    }
}