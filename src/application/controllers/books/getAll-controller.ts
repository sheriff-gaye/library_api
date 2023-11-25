import { Request, Response } from 'express';

import { BooksRepositoryImpl } from '../../../infrastructure/repository/books-repository';
import { GetAllBooksUseCase } from '../../use-cases/books/get-all-use-case';

export class GetAllBooksController {

    private getAllBooksUseCase: GetAllBooksUseCase;

    constructor() {
        const booksRepository = new BooksRepositoryImpl();
        this.getAllBooksUseCase= new GetAllBooksUseCase(booksRepository);
    }

    async getCategory(req: Request, res: Response) {
        try {

            const category = await this.getAllBooksUseCase.execute();
            res.status(200).json(category);

        } catch (error:any) {
            return res.status(400).json({ error:error.message });

        }
    }

}