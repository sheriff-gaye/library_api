import { BooksRepository } from "../../../domain/repository/books-repository";


export class DeleteBoksUseCase{

    constructor(
        private booksRepository:BooksRepository
    ){}


    async execute(id:string){
        await this.booksRepository.delete(id);

    }
}