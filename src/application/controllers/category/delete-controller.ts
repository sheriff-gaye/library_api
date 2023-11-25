import { Request, Response } from 'express';
import { CategoryRepositoryImpl } from '../../../infrastructure/repository/category-repository';
import { DeleteCategoryUseCase } from '../../use-cases/Category/delet-use-case';


export class DeleteCategoryController {

    private deleteCategoryUseCase: DeleteCategoryUseCase;

    constructor() {
        const categoryRepository = new CategoryRepositoryImpl();
        this.deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository);

    }
    async deleteCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            await this.deleteCategoryUseCase.execute(id);
            res.status(200).json({ message: "Category Deleted Successfully" });

        } catch (error:any) {
            res.status(404).json({ error: error.message })

        }
    }

}