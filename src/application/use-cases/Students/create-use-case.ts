import { StudentsRepository } from "../../../domain/repository/students-repository";
import { StudentMapper } from "../../mappers/student-mapper";
import { StudentsRequest } from "./request";
import { StudentResponse } from "./response";

export class CreateStudentUseCase {

    constructor(private  studentsRepository: StudentsRepository) { }

    async execute(request:StudentsRequest): Promise<StudentResponse> {

        const studentData=StudentMapper.toEntity(request);
        return await  this.studentsRepository.create(studentData);
    }
}