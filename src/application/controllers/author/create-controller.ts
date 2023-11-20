import { Request, Response } from 'express';
import { CreateAuthorUseCase } from "../../use-cases/Author/create-use-case";
import { AuthorRepositoryImpl } from "../../../infrastructure/repository/author-repository";

export class CreateAuthorController {
    private createAuthorUseCase: CreateAuthorUseCase;

    constructor() {
        const authorRepository = new AuthorRepositoryImpl();
        this.createAuthorUseCase = new CreateAuthorUseCase(authorRepository);
    }


    async createAuthor(req: Request, res: Response) {
        try {
            const { firstName, lastName } = req.body;
            const newAuthor = await this.createAuthorUseCase.execute(firstName, lastName);
            res.status(201).json(newAuthor);
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }

}