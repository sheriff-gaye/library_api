import { CategoryAttributes } from '../interfaces/Categories';
import { CategoryRepository } from '../repository/category-repository';

const categoryRepository = new CategoryRepository();

export class CategoryService {
  async createCategory(fullname: string): Promise<CategoryAttributes> {
    return categoryRepository.createCategory(fullname);
  }

  async getAllCategories(): Promise<CategoryAttributes[]> {
    return categoryRepository.getAllCategories();
  }

  async upadateCategory(id:string,fullname:string){
    return categoryRepository.updateCategory(id,fullname)
  }

  async deleteCategory(id:string){
    return categoryRepository.deleteCategory(id);
  }
}
