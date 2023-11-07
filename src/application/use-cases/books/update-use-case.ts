import { BooksRepository } from "../../../domain/repository/books-repository";



export class UpdateBooksUseCase{

    constructor(
        private booksRepository:BooksRepository
    ){}

    async execute (
        id:string,
        title: string,
        description: Text,
        category: string,
        publisher: string,
        publish_date: Date,
        copies: number,
        author: string
    ){
        const existingBook=await this.booksRepository.findById(id);
        if(!existingBook){
            return null
        }
        return await this.booksRepository.update({
            ...existingBook,})
            


    }
}