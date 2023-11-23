import express from 'express';
import { CreateCategoryController } from '../../application/controllers/category/create-controllerr';
import { UpadateCategoryController } from '../../application/controllers/category/update-controller';
import { DeleteCategoryController } from '../../application/controllers/category/delete-controller';
import { GetAllCategoryController } from '../../application/controllers/category/getAll-controller';
import { UserRepositoryImpl } from '../repository/user-repository';
import { AuthenticationMiddleware } from '../middlewares/authenticate.middleware';

const categoryRouter = express.Router();

const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpadateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const getAllCategoryController = new GetAllCategoryController();


categoryRouter.post('/category', (req, res) => createCategoryController.createCategory(req, res));
categoryRouter.get('/category', (req, res) => getAllCategoryController.getCategory(req, res));
categoryRouter.delete('/category/:id', (req, res) => deleteCategoryController.deleteCategory(req, res));
categoryRouter.patch('/category/:id', (req, res) => updateCategoryController.updateCategory(req, res));

export default categoryRouter;
