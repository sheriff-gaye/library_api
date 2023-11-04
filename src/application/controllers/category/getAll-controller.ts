
import { Request, Response } from 'express';
import { GetAllCatgoriesUseCases } from '../../use-cases/Category/get-all-use-case';
import { CategoryRepositoryImpl } from '../../../infrastructure/database/repository/category-repository';

export class GetAllCategoryController {

    private getAllCategoriesUseCase: GetAllCatgoriesUseCases;

    constructor() {
        const categoryRepository = new CategoryRepositoryImpl();
        this.getAllCategoriesUseCase = new GetAllCatgoriesUseCases(categoryRepository);
    }

    async getCategory(req: Request, res: Response) {
        try {

            const category = await this.getAllCategoriesUseCase.execute();
            res.status(200).json(category);

        } catch (error) {
            res.json({ message: "Error in Getting Categories" });

        }
    }

}