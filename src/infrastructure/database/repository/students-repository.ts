import { Students } from "../../../domain/entities/student-entity";
import { StudentsRepository } from "../../../domain/repository/students-repository";
import { StudentModel } from "../model/student-model";


export class StudentRepositoryImpl implements StudentsRepository{
    getAll(): Promise<Students[]> {
        return await StudentModel.findAll();
    }
    create(data: Partial<Students>): Promise<Students> {
        throw new Error("Method not implemented.");
    }
    update(studentData: Partial<Students>): Promise<Students | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Students | null> {
        throw new Error("Method not implemented.");
    }

}