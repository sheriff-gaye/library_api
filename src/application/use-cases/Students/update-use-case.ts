import { StudentsRepository } from "../../../domain/repository/students-repository";
import { StudentsRequest } from "./request";
import { StudentResponse } from "./response";
import { StudentMapper } from '../../mappers/student-mapper';


export class UpdateStudentsUseCase {
    constructor(private readonly studentsRepository: StudentsRepository) { }

    async execute(request: StudentsRequest): Promise<StudentResponse> {
        if (!request.id) throw new Error("Id is required");

        const existingStudents = await this.studentsRepository.findById(request.id);
        if (!existingStudents) throw new Error("Student Not Found");

        const studentData=StudentMapper.toEntity(request);

        return await this.studentsRepository.update(studentData);



    }
}