import { Students } from "../../domain/entities/student-entity";

export class StudentMapper{
    public static toDB(student:Students):any{
        return {
            id: student.id,
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email,
            phone: student.phone,
            gender:student.gender,
            dob:student.dob,
            studentId:student.studentId,
            levelId:student.levelId,
            createdAt: student.createdAt?.toISOString(),
            updatedAt:student.updatedAt?.toISOString()

        }
    }

    public static toEntity(student:any):Students{
        return Students.CreateProperties({
            id: student.id,
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email,
            phone: student.phone,
            gender:student.gender,
            dob:student.dob,
            studentId:student.studentId,
            levelId:student.levelId,
            createdAt: student.createdAt,
            updatedAt:student.updatedAt
        })
    }
}