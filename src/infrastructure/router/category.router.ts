import express from 'express';
import { createCategory, deleteCategory, getCategory, updateCategory } from '../../application/controllers/category-controller';

const categoryRouter = express.Router();

categoryRouter.post('/category',createCategory);
categoryRouter.get('/category',getCategory );
categoryRouter.delete('/category/:id',deleteCategory);
categoryRouter.patch('/category/:id',updateCategory)

export default categoryRouter;
