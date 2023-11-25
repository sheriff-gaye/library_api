import { CategoryRepository } from '../../../domain/repository/category-repository';
import { CreateCategoryRequest } from './request';
import { CreateCategoryResponse } from './response';
import { CategoryMapper } from '../../mappers/category-mapper';

export class CreateCategoryUseCase {

    constructor(
        private readonly categoryRepository: CategoryRepository
    ) { }

    async execute(request: CreateCategoryRequest): Promise<CreateCategoryResponse> {
        
            const category = CategoryMapper.toEntity(request);
            return await this.categoryRepository.create(category);

    }
}
