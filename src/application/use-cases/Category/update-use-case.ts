import { CategoryRepository } from "../../../domain/repository/category-repository";
import { CategoryMapper } from "../../mappers/category-mapper";
import { CreateCategoryRequest } from "./request";
import { CreateCategoryResponse } from './response';

export class UpdateCategoryUseCase{
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(request:CreateCategoryRequest): Promise<CreateCategoryResponse> {
    if (!request.id) throw new Error("Category ID is required for update");
    const category = await this.categoryRepository.findById(request.id);

    if (!category) {
      return null;
    }
    const updatedCategory = CategoryMapper.toEntity(request)
    return  await this.categoryRepository.update(updatedCategory);

  }
}
