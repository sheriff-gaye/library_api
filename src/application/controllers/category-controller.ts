import { Request, Response } from 'express';
import { CreateCategoryUseCase } from '../../application/use-cases/Category/create-use-case'; // Update the import
import { GetAllCatgoriesUseCases } from '../../application/use-cases/Category/get-all-use-case';
import { CategoryRepositoryImpl } from '../../infrastructure/database/repository/category-repository';
import { DeleteCategoryUseCase } from '../use-cases/Category/delet-use-case';
import { UpdateCategoryUseCase } from '../use-cases/Category/update-use-case';

const categoryRepository = new CategoryRepositoryImpl();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const getAllCategoriesUseCase = new GetAllCatgoriesUseCases(categoryRepository);
const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository);
const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository);

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        const newCategory = await createCategoryUseCase.execute(name);
        res.json(newCategory);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

export const getCategory = async (req: Request, res: Response) => {
    try {

        const category = await getAllCategoriesUseCase.execute();
        res.status(200).json(category);

    } catch (error) {
        res.json({ message: "Error in Getting Categories" });

    }
}

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const category = await updateCategoryUseCase.execute(id, name);

        res.json(category);

    } catch (error) {
        res.status(404).json({ message: "Error Updating Catgeory" });

    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteCategoryUseCase.execute(id);
        res.status(200).json({ message: "Category Deleted Successfully" });

    } catch (error) {
        res.status(404).json({ message: "Error in Deleting Category" })

    }
}