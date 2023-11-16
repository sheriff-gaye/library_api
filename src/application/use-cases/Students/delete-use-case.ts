import { StudentsRepository } from "../../../domain/repository/students-repository";


export class DeleteStudentUseCase {

    constructor(
        private studentsRepository: StudentsRepository
    ) { }


    async execute(id: string) {
        await this.studentsRepository.delete(id);
    }
}