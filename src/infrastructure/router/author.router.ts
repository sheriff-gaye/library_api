import express, { Request, Response } from 'express';
import { CreateAuthorUseCase } from "../../application/use-cases/Author/create-use-case";
import { GetAllAuthorsUseCase } from "../../application/use-cases/Author/get-all-use-case";
import { AuthorRepositoryImpl } from "../database/repository/author-repository";

const authorRouter = express.Router();
const authorRepository = new AuthorRepositoryImpl();
const createAuthorUseCase = new CreateAuthorUseCase(authorRepository);
const getAllAuthorsUseCase = new GetAllAuthorsUseCase(authorRepository);

authorRouter.post('/authors', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName} = req.body;
    const newAuthor = await createAuthorUseCase.execute(firstName, lastName);
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


authorRouter.get('/authors', async (req: Request, res: Response) => {
  try {
    const authors = await getAllAuthorsUseCase.execute();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { authorRouter };
