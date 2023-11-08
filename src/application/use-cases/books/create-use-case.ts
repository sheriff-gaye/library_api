import { BooksRepository } from "../../../domain/repository/books-repository";
import { Books } from "../../../domain/entities/book-entity";

export class CreateBooksUseCase {
    constructor(private booksRepository: BooksRepository) { }

    async execute(
        title: string,
        description: Text,
        publisher: string,
        publish_date: Date,
        copies: number,
        authorId: string,
        categoryId: string
        
    ): Promise<Books> {
        const booksData: Partial<Books> = {
            title,
            description,
            copies,
            publisher,
            publish_date,
            authorId, 
            categoryId, 
        };

        const newBook= this.booksRepository.create(booksData as Books);
        return newBook;
    }
}
