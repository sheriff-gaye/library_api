import { BooksMapper } from '../../application/mappers/book-mappers';
import { Books } from '../../domain/entities/book-entity';
import { BooksRepository } from '../../domain/repository/books-repository';
import { AuthorModel } from '../database/model/author-model';
import { BooksModel } from '../database/model/books-model';
import { CategoryModel } from '../database/model/category-model';

export class BooksRepositoryImpl implements BooksRepository {

    private booksModel: typeof BooksModel
    private authorModel: typeof AuthorModel
    private categoryModel:typeof CategoryModel
    constructor() {
        this.booksModel = BooksModel
        this.authorModel = AuthorModel
        this.categoryModel=CategoryModel

    }

    async getAll(): Promise<Books[]> {
        const books = await this.booksModel.findAll();
        return books.map((book) => BooksMapper.toEntity(book));
    }

    async create(data: Books): Promise<Books> {
        const existingBook = await BooksModel.findOne({
            where: { title: data.title }
        });
        const author = await this.authorModel.findByPk(data.authorId);
        const category = await this.categoryModel.findByPk(data.categoryId);

        if (existingBook) throw new Error('This book already exists');
        if (!author) throw new Error('Author with the specified ID does not exist')
        if (!category) throw new Error('Category with the specified ID does not exist');

        const mappedBooks = BooksMapper.toDB(data);
        const createdBook = await this.booksModel.create(mappedBooks);
        return BooksMapper.toEntity(createdBook);
    }

    async update(bookData: Books): Promise<Books | null> {
        const existingBook = await this.booksModel.findByPk(bookData.id);
        if (!existingBook) throw new Error("Book Not Found");

        const Book = await this.booksModel.findOne({
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
        await this.booksModel.destroy({
            where: { id }
        });
    }
    async findById(id: string): Promise<Books | null> {
        const book = await this.booksModel.findByPk(id);
        return book ? book.toJSON() as Books : null;
    }
}
