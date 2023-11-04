import express from 'express';
import { UpdateAuthorController } from '../../application/controllers/author/update-controller';
import { CreateAuthorController } from '../../application/controllers/author/create-controller';
import { DeleteAuthorController } from '../../application/controllers/author/delete-controller';
import { GetAllAuthorController } from '../../application/controllers/author/getAll-controller';

const authorRouter = express.Router();
const updateAuthorController = new UpdateAuthorController();
const createAuthorController = new CreateAuthorController();
const deleteAuthCorontroller = new DeleteAuthorController();
const getAllAuthorController = new GetAllAuthorController();

authorRouter.post('/authors', (req, res) => createAuthorController.createAuthor(req, res));
authorRouter.get('/authors', (req, res) => getAllAuthorController.getAuthors(req, res));
authorRouter.patch('/authors/:id', (req, res) => updateAuthorController.updateAuthor(req, res));
authorRouter.delete('/authors/:id', (req, res) => deleteAuthCorontroller.deleteAuthors(req, res));

export default authorRouter;
