import { Category } from '../../../domain/entities/category-entity';
import { CategoryRepository } from '../../../domain/repository/category-repository';

export class CreateCategoryUseCase {
    constructor(
        private CategoryRepository: CategoryRepository
    ) { }

    async execute(name: string): Promise<Category> {
        const newData: Partial<Category> = {
            name
        }
        return await this.CategoryRepository.create(newData as Category);
        
    }
}