import { Author } from '../../domain/entities/author-entity';
import { Category } from '../../domain/entities/category-entity';
import { CategoryRepository } from '../../domain/repository/category-repository';
import { CategoryModel } from '../database/model/category-model';



export class CategoryRepositoryImpl implements CategoryRepository {
    async findById(id: string): Promise<Category | null> {
        const category= await CategoryModel.findByPk(id);
        return category?.toJSON() as Category
    }
    async getAll(): Promise<Category[]> {
        return  await CategoryModel.findAll();
    }

    async create(categoryData: Partial<Category>): Promise<Category> {
        
        let existing = await CategoryModel.findOne({where:{
            name: categoryData.name
        }});
        if (existing) throw new Error('Category already exists');

        return await CategoryModel.create(categoryData)
    }
    
    async update(category: Category): Promise<Category | null> {
        const existingCategory = await CategoryModel.findByPk(category.id);
      
        if (!existingCategory) {
          return null;
        }
      
        return await existingCategory?.update(category);
      }
      
    async delete(id: string): Promise<void> {
        await CategoryModel.destroy({
            where:{id}
        });
    
    }
   

}