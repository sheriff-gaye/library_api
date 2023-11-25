import { Request, Response } from 'express';
import { UpdateBooksUseCase } from '../../use-cases/books/update-use-case';
import { BooksRepositoryImpl } from '../../../infrastructure/repository/books-repository';

export class UpdateBooksController {

    private updateLevelUseCase: UpdateBooksUseCase

    constructor() {

        const booksRepository = new BooksRepositoryImpl();
        this.updateLevelUseCase = new UpdateBooksUseCase(booksRepository);

    }
    async updateBooks(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, description, publisher, publish_date, copies, authorId, categoryId } = req.body;

            const UpdatedBook = await this.updateLevelUseCase.execute({id, title, description, publisher, publish_date, copies, authorId, categoryId});

            res.json(UpdatedBook);

        } catch (error: any) {
            return res.status(400).json({ error: error.message });

        }
    }
}

