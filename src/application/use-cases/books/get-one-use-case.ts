import { Books } from "../../../domain/entities/book-entity";
import { BooksRepository } from "../../../domain/repository/books-repository";


export class GetOneBooksUseCase{
    constructor(
        private booksRepository:BooksRepository
    ){}

    async execute(id:string):Promise<Books | null>{
       return  await this.booksRepository.findById(id);
        

    }
}