import { Request, Response } from 'express';
import { UpdateAuthorUseCase } from '../../use-cases/Author/update-use-case';
import { AuthorRepositoryImpl } from "../../../infrastructure/repository/author-repository";

export class UpdateAuthorController {
    private updateAuthorUseCase: UpdateAuthorUseCase;

    constructor() {
        const authorRepository = new AuthorRepositoryImpl();
        this.updateAuthorUseCase = new UpdateAuthorUseCase(authorRepository);
    }

    async updateAuthor(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { firstName, lastName } = req.body;
            const updatedAuthor = await this.updateAuthorUseCase.execute(id, firstName, lastName);
            if (updatedAuthor) {
                res.json(updatedAuthor);
            } else {
                res.json({ message: 'Author not found' });
            }
        } catch (error) {
            res.json({ message: 'Update failed' });
        }
    }
}
