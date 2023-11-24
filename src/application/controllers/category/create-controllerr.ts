import { Request, Response } from 'express';
import { CreateCategoryUseCase } from '../../use-cases/Category/create-use-case';
import { CategoryRepositoryImpl } from '../../../infrastructure/repository/category-repository';

export class CreateCategoryController {

    private createCategoryUseCase: CreateCategoryUseCase;

    constructor() {
        const categoryRepository = new CategoryRepositoryImpl();
        this.createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
    }

    async createCategory(req: Request, res: Response) {
        try {
            const {id , name } = req.body;

            if (!name) {
                return res.status(400).json({ error: "Name is required" });
            }

            const newCategory = await this.createCategoryUseCase.execute( {name,id} );
            return res.json(newCategory);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
