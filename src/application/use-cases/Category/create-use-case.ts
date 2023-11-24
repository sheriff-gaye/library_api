import { Category } from '../../../domain/entities/category-entity';
import { CategoryRepository } from '../../../domain/repository/category-repository';
import { CreateCategoryRequest } from './request';
import { CreateCategoryResponse } from './response';
import { UseCase } from '../index';
import { CategoryMapper } from '../../mappers/category-mapper';

export class CreateCategoryUseCase implements UseCase<CreateCategoryRequest, CreateCategoryResponse> {

    constructor(
        private readonly categoryRepository: CategoryRepository
    ) { }

    async execute(request: CreateCategoryRequest): Promise<CreateCategoryResponse> {
        
            const category = CategoryMapper.toEntity(request);
            return await this.categoryRepository.create(category);

    }
}
