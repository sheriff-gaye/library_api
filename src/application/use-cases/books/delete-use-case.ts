import { BooksRepository } from "../../../domain/repository/books-repository";


export class DeleteBooksUseCase{

    constructor(
        private booksRepository:BooksRepository
    ){}


    async execute(id:string){
        await this.booksRepository.delete(id);

    }
}