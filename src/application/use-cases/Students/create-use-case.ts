import { Students } from "../../../domain/entities/student-entity";
import { StudentsRepository } from "../../../domain/repository/students-repository";


export class CreateStudentUseCase {

    constructor(
        private studentsRepository: StudentsRepository
    ) { }


    async execute(
        firstname: string,
        lastname: string,
        email: string,
        phone: string,
        gender: string,
        dob: Date,
        levelId: string,
        studentId: string

    ): Promise<Students> {

        const studentData: Partial<Students> = {
            firstname, lastname, email, phone, gender, dob, levelId, studentId
        };

        const newStudent = this.studentsRepository.create(studentData as Students);
        return newStudent
    }
}