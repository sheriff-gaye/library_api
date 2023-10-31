import { Category } from '../entities/Category';
import { CategoryRepository } from '../repository/category-repository';

const categoryRepository = new CategoryRepository();

export class CategoryService {
  async createCategory(fullname: string): Promise<Category> {
    return categoryRepository.createCategory(fullname);
  }

  async getAllCategories(): Promise<Category[]> {
    return categoryRepository.getAllCategories();
  }
}
