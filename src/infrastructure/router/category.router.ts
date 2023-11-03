import express, { Request, Response } from 'express';
import { CategoryRepositoryImpl } from '../database/repository/category-repository';
import { CreateCategoryUseCase } from '../../application/use-cases/Category/create-use-case'; // Update the import
import { GetAllCatgoriesUseCases } from '../../application/use-cases/Category/get-all-use-case';

const categoryRouter = express.Router();
const categoryRepository = new CategoryRepositoryImpl();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const getAllCategoriesUseCase = new GetAllCatgoriesUseCases(categoryRepository);

categoryRouter.post('/category', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCategory = await createCategoryUseCase.execute(name);
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' }); // Set the appropriate HTTP status code
  }
});

export default categoryRouter;
