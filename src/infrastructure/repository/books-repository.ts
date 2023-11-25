import { BooksMapper } from '../../application/mappers/book-mappers';
import { Books } from '../../domain/entities/book-entity';
import { BooksRepository } from '../../domain/repository/books-repository';
import { AuthorModel } from '../database/model/author-model';
import { BooksModel } from '../database/model/books-model';
import { CategoryModel } from '../database/model/category-model';

export class BooksRepositoryImpl implements BooksRepository {
    async getAll(): Promise<Books[]> {
        const books = await BooksModel.findAll();
        return books.map((book) => BooksMapper.toEntity(book));
    }

    async create(data: Books): Promise<Books> {
        const existingBook = await BooksModel.findOne({
            where: { title: data.title }
        });
        const author = await AuthorModel.findByPk(data.authorId);
        const category = await CategoryModel.findByPk(data.categoryId);

        if (existingBook) throw new Error('This book already exists');
        if (!author) throw new Error('Author with the specified ID does not exist')
        if (!category) throw new Error('Category with the specified ID does not exist');

        const mappedBooks = BooksMapper.toDB(data);
        const createdBook = await BooksModel.create(mappedBooks);
        return BooksMapper.toEntity(createdBook);
    }

    async update(bookData: Books): Promise<Books | null> {
        const existingBook = await BooksModel.findByPk(bookData.id);
        if (!existingBook) throw new Error("Book Not Found");

        const Book = await BooksModel.findOne({
            where: {
                title: bookData.title,
            },
        });
        if (Book) throw new Error("Book with this title already exist")
        const mappedBooks = BooksMapper.toDB(bookData);
        const updated = await existingBook.update(mappedBooks);
        return BooksMapper.toEntity(updated);
    }

    async delete(id: string): Promise<void> {
        await BooksModel.destroy({
            where: { id }
        });
    }
    async findById(id: string): Promise<Books | null> {
        const book = await BooksModel.findByPk(id);
        return book ? book.toJSON() as Books : null;
    }
}
