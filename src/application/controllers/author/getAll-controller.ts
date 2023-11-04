
import { Request, Response } from 'express';
import { GetAllAuthorsUseCase } from "../../use-cases/Author/get-all-use-case";
import { AuthorRepositoryImpl } from "../../../infrastructure/database/repository/author-repository";
import { GetAllCatgoriesUseCases } from '../../use-cases/Category/get-all-use-case';


export class GetAllAuthorController {
    private getAllAuthorsUseCase: GetAllAuthorsUseCase

    constructor() {
        const authorRepository = new AuthorRepositoryImpl();
        this.getAllAuthorsUseCase = new GetAllAuthorsUseCase(authorRepository);
    }

    async getAuthors(req: Request, res: Response) {
        try {
            const authors = await this.getAllAuthorsUseCase.execute();
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
}
