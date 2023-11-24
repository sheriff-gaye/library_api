import { UseCase } from "..";
import { Category } from "../../../domain/entities/category-entity";
import { CategoryRepository } from "../../../domain/repository/category-repository";
import { CategoryMapper } from "../../mappers/category-mapper";
import { CreateCategoryRequest } from "./request";
import { CreateCategoryResponse } from './response';

export class UpdateCategoryUseCase implements UseCase<CreateCategoryRequest,CreateCategoryResponse> {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(request:CreateCategoryRequest): Promise<CreateCategoryResponse> {
    const category = await this.categoryRepository.findById(request.id);

    if (!category) {
      return null;
    }
    const updatedCategory = CategoryMapper.toEntity(request)
    return  await this.categoryRepository.update(updatedCategory);

  }
}
