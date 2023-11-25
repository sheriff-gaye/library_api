import { BooksRepository } from "../../../domain/repository/books-repository";
import { BooksMapper } from "../../mappers/book-mappers";
import { BookRequest } from "./request";
import { BookResponse } from "./response";



export class UpdateBooksUseCase{

    constructor(
        private booksRepository:BooksRepository
    ){}

    async execute (request:BookRequest):Promise<BookResponse>{
        if(!request.id)throw new Error("Id is Required");
        const existingBook=await this.booksRepository.findById(request.id);
        if (!existingBook){
            throw new Error("Book not found");

        }
        const mappedBooks=BooksMapper.toEntity(request);
        return await this.booksRepository.update(mappedBooks)
            


    }
}