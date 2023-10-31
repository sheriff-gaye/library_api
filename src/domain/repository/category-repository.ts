import { Category } from '../entities/Category';

export class CategoryRepository {
  async createCategory(fullname: string): Promise<Category> {
    return Category.create({ fullname });
  }

  async getAllCategories(): Promise<Category[]> {
    return Category.findAll();
  }
}
