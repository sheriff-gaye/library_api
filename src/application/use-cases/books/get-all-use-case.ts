import { Books } from "../../../domain/entities/book-entity";
import { BooksRepository } from "../../../domain/repository/books-repository";


export class GetAllBooksUseCase{
    constructor(
        private booksRepository:BooksRepository
    ){}

    async execute():Promise<Books[]>{
        const books=await this.booksRepository.getAll();
        return books;

    }
}