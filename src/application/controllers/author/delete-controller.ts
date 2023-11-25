
import { Request, Response } from 'express';
import { DeleteAuthorUseCase } from '../../use-cases/Author/delete-use-case';
import { AuthorRepositoryImpl } from "../../../infrastructure/repository/author-repository";


export class DeleteAuthorController {

    private deleteAuthtorUseCase: DeleteAuthorUseCase

    constructor() {
        const authorRepository = new AuthorRepositoryImpl();
        this.deleteAuthtorUseCase = new DeleteAuthorUseCase(authorRepository);

    }
    async deleteAuthors(req: Request, res: Response) {
        try {

            const { id } = req.params;
            await this.deleteAuthtorUseCase.execute(id);
            res.json({ message: "Author Deleted Successfully" });
        } catch (error:any) {
            res.status(500).json({ error: error.message});
        }
    }
};