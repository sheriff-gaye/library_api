
import { Request, Response } from 'express';
import { GetAllAuthorsUseCase } from "../../use-cases/Author/get-all-use-case";
import { AuthorRepositoryImpl } from "../../../infrastructure/repository/author-repository";
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
        } catch (error:any) {
            res.status(500).json({ error: error.message});
        }
    }
}
