import { Students } from "../entities/student-entity";


export interface StudentsRepository {
    getAll(): Promise<Students[]>;
    create(data: Students): Promise<Students>;
    update(studentData: Students): Promise<Students | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Students | null>

}