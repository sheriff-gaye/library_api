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
        
    ): Promise<Books> {
        const booksData: Partial<Books> = {
            title,
            description,
            copies,
            publisher,
            publish_date,
        };

        return this.booksRepository.create(booksData as Books);
    }
}
