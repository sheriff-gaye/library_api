
import { Request, Response } from 'express';
import { CategoryRepositoryImpl } from '../../../infrastructure/repository/category-repository';
import { UpdateCategoryUseCase } from '../../use-cases/Category/update-use-case';


export class UpadateCategoryController {

    private updateCategoryUseCase: UpdateCategoryUseCase
    constructor() {
        const categoryRepository = new CategoryRepositoryImpl();
        this.updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository);

    }

    async updateCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const category = await this.updateCategoryUseCase.execute(id, name);

            if (category) {
                res.json(category);
            } else {
                res.status(404).json({ message: "Category not found or update failed" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

}
