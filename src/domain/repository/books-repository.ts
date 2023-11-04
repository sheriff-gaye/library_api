import { Books } from "../entities/book-entity";


export interface BooksRepository {
    getAll(): Promise<Books[]>;
    create(data: Partial<Books>): Promise<Books>;
    update(bookData: Partial<Books>): Promise<Books | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Books | null>

}