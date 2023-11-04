
import { Request, Response } from 'express';
import { CreateCategoryUseCase } from '../../use-cases/Category/create-use-case'; // Update the import
import { CategoryRepositoryImpl } from '../../../infrastructure/database/repository/category-repository';


export class CreateCategoryController {

    private createCategoryUseCase: CreateCategoryUseCase;

    constructor() {
        const categoryRepository = new CategoryRepositoryImpl();
        this.createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
    }


    async createCategory(req: Request, res: Response) {
        try {
            const { name } = req.body;

            if (!name) {
                return res.status(400).json({ error: "Name is required" });
            }

            const newCategory = await this.createCategoryUseCase.execute(name);
            res.json(newCategory);
        } catch (error) {
            res.status(500).json({ message: 'Category Already Exist' });
        }
    }

}