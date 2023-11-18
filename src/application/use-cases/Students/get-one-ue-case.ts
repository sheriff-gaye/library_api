import { Students } from "../../../domain/entities/student-entity";
import { StudentsRepository } from "../../../domain/repository/students-repository";



export class GetOneStudentUseCase{
    constructor(
        private studentRepository: StudentsRepository
    ){}


    async execute(id:string):Promise<Students | null>{
        return await this.studentRepository.findById(id);
    }
}