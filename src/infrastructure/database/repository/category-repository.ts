import { Author } from '../../../domain/entities/author-entity';
import { Category } from '../../../domain/entities/category-entity';
import { CategoryRepository } from '../../../domain/repository/category-repository';
import { CategoryModel } from '../model/category-model';



export class CategoryRepositoryImpl implements CategoryRepository {
    findById(id: string): Promise<Category> {
        throw new Error('Method not implemented.');
    }
    update(author: Category): Promise<Category> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async getAll(): Promise<Category[]> {
        const categories = await CategoryModel.findAll();
        const categoryObjects = categories.map((item) => new Category(item.id, item.name));
        return categoryObjects;

    }

    async create(categoryData: Partial<Category>): Promise<Category> {
        return await CategoryModel.create(categoryData)
    }

}