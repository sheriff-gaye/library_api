import  { Request, Response } from 'express';
import { CreateAuthorUseCase } from "../../application/use-cases/Author/create-use-case";
import { GetAllAuthorsUseCase } from "../../application/use-cases/Author/get-all-use-case";
import { DeleteAuthorUseCase } from '../../application/use-cases/Author/delete-use-case';
import { UpdateAuthorUseCase } from '../../application/use-cases/Author/update-use-case';
import { AuthorRepositoryImpl } from "../../infrastructure/database/repository/author-repository";

const authorRepository = new AuthorRepositoryImpl();
const createAuthorUseCase = new CreateAuthorUseCase(authorRepository);
const getAllAuthorsUseCase = new GetAllAuthorsUseCase(authorRepository);
const deleteAuthtorUseCase = new DeleteAuthorUseCase(authorRepository);
const updateAuthorUseCase = new UpdateAuthorUseCase(authorRepository);

export const createAuthor = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName } = req.body;
        const newAuthor = await createAuthorUseCase.execute(firstName, lastName);
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}


export const getAuthors = async (req: Request, res: Response) => {
    try {
        const authors = await getAllAuthorsUseCase.execute();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}


export const updateAuthors = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { firstName, lastName } = req.body;
        const updatedAuthor = await updateAuthorUseCase.execute(id, firstName, lastName);
        if (updatedAuthor) {
            res.json(updatedAuthor);
        } else {
            res.json({ message: 'Author not found' });
        }
    } catch (error) {
        res.json({ message: 'Update failed' });
    }
}

export const deleteAuthors=async (req: Request, res: Response) => {
    try {

        const { id } = req.params;
        await deleteAuthtorUseCase.execute(id);
        res.json({ message: "Author Deleted Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};