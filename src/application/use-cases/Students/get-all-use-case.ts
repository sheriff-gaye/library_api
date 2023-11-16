import { Students } from "../../../domain/entities/student-entity";
import { StudentsRepository } from "../../../domain/repository/students-repository";


export class GetAllStudentsUseCase{
    constructor(
        private studentsRepository:StudentsRepository
    ){}

    async execute():Promise<Students[]>{
        const students=await this.studentsRepository.getAll();
        return students;
    }
}