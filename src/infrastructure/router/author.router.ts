import express from 'express';
import { createAuthor, deleteAuthors, getAuthors, updateAuthors } from '../../application/controllers/author-controller';

const authorRouter = express.Router();

authorRouter.post('/authors', createAuthor);
authorRouter.get('/authors',getAuthors );
authorRouter.patch('/authors/:id', updateAuthors);
authorRouter.delete('/authors/:id', deleteAuthors);

export default authorRouter;
