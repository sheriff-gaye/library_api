import { BooksRepository } from "../../../domain/repository/books-repository";



export class UpdateBooksUseCase{

    constructor(
        private booksRepository:BooksRepository
    ){}

    async execute (
        id:string,
        title: string,
        description: Text,
        publisher: string,
        publish_date: Date,
        copies: number,
        authorId: string,
        categoryId: string,
        
    ){
        const existingBook=await this.booksRepository.findById(id);
        if(!existingBook){
            return null
        }
        existingBook.title=title;
        existingBook.description=description
        existingBook.publisher=publisher
        existingBook.publish_date=publish_date;
        existingBook.copies=copies;
        existingBook.authorId=authorId;
        existingBook.categoryId=categoryId;
        
       
        
       
        
        return await this.booksRepository.update(existingBook)
            


    }
}