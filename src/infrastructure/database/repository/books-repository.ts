import { Books } from '../../../domain/entities/book-entity';
import { BooksRepository } from '../../../domain/repository/books-repository';
import { BooksModel } from '../model/books-model';

export class BooksRepositoryImpl implements BooksRepository {
    async getAll(): Promise<Books[]> {
        const books = await BooksModel.findAll();
        return books.map((book) => book.toJSON() as Books);
    }

    async create(data: Partial<Books>): Promise<Books> {
        const createdBook = await BooksModel.create(data);
        return createdBook.toJSON() as Books;
    }

    async update(bookData: Partial<Books>): Promise<Books | null> {
        const existingBook = await BooksModel.findByPk(bookData.id);
        if (!existingBook) {
            return null;
        }

        await existingBook.update(bookData);

        return existingBook.toJSON() as Books;
    }

    async delete(id: string): Promise<void> {
        await BooksModel.destroy({
            where: { id },
        });
    }

    async findById(id: string): Promise<Books | null> {
        const book = await BooksModel.findByPk(id);
        return book ? book.toJSON() as Books : null;
    }
}
