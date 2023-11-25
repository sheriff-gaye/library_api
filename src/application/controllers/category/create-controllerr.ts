import { Request, Response } from 'express';
import { CreateCategoryUseCase } from '../../use-cases/Category/create-use-case';
import { CategoryRepositoryImpl } from '../../../infrastructure/repository/category-repository';

export class CreateCategoryController  {

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

            const newCategory = await this.createCategoryUseCase.execute({ name});
            return res.json(newCategory);
        } catch (error:any) {
            return res.status(400).json({ error:error.message });

        }
    }
}
