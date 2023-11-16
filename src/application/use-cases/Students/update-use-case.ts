import { Students } from "../../../domain/entities/student-entity";
import { StudentsRepository } from "../../../domain/repository/students-repository";


export class UpdateStudentsUseCase{
    constructor(
        private studentsRepository:StudentsRepository
    ){}


    async execute(id:string,
        firstname: string,
        lastname: string,
        email: string,
        phone: string,
        gender: string,
        dob: Date,
        levelId: string,
        studentId: string
        ):Promise<Students | null>{

            const existingStudents=await this.studentsRepository.findById(id);
            if(!existingStudents){
                return null
            }

            existingStudents.firstname=firstname;
            existingStudents.lastname=lastname;
            existingStudents.email=email;
            existingStudents.phone=phone;
            existingStudents.gender=gender;
            existingStudents.dob=dob;
            existingStudents.levelId=levelId
            existingStudents.studentId=studentId

            return await this.studentsRepository.update(existingStudents);
        


    }
}