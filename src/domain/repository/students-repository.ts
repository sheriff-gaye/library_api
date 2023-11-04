import { Students } from "../entities/student-entity";


export interface StudentsRepository {
    getAll(): Promise<Students[]>;
    create(data: Partial<Students>): Promise<Students>;
    update(bookData: Partial<Students>): Promise<Students | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Students | null>

}