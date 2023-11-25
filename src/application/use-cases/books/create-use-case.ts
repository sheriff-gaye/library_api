import { BooksRepository } from "../../../domain/repository/books-repository";
import { BookRequest } from "./request";
import { BookResponse } from "./response";
import { BooksMapper } from "../../mappers/book-mappers";

export class CreateBooksUseCase {
    constructor(private booksRepository: BooksRepository) { }

    async execute(request:BookRequest): Promise<BookResponse> {
        const booksData =BooksMapper.toEntity(request);
        return await this.booksRepository.create(booksData);
       ;
    }
}
