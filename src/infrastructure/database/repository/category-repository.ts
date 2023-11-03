import { Author } from '../../../domain/entities/author-entity';
import { Category } from '../../../domain/entities/category-entity';
import { CategoryRepository } from '../../../domain/repository/category-repository';
import { CategoryModel } from '../model/category-model';



export class CategoryRepositoryImpl implements CategoryRepository {
    async findById(id: string): Promise<Category | null> {
        return await CategoryModel.findByPk(id);
    }
    async getAll(): Promise<Category[]> {
        return  await CategoryModel.findAll();
    }

    async create(categoryData: Partial<Category>): Promise<Category> {
        return await CategoryModel.create(categoryData)
    }
    
    async update(category: Category): Promise<Category | null> {
       const existingCategory=await CategoryModel.findByPk(category.id)
       if(!existingCategory){
        return null;
        }
        await existingCategory.update(category);
        return await CategoryModel.findByPk(category.id) as Category;
   
    }
    async delete(id: string): Promise<void> {
        await CategoryModel.destroy({
            where:{id}
        });
    
    }
   

}