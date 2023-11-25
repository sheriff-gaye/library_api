import { CategoryMapper } from '../../application/mappers/category-mapper';
import { Category } from '../../domain/entities/category-entity';
import { CategoryRepository } from '../../domain/repository/category-repository';
import { CategoryModel } from '../database/model/category-model';

export class CategoryRepositoryImpl implements CategoryRepository {
    async findById(id: string): Promise<Category | null> {
        const category = await CategoryModel.findByPk(id);
        return category?.toJSON() as Category
    }
    async getAll(): Promise<Category[]> {
        const categories = await CategoryModel.findAll();
        return categories.map((category) => CategoryMapper.toEntity(category));
    }

    async create(categoryData: Category): Promise<Category> {

        const existingCategory = await CategoryModel.findOne({
            where: { name: categoryData.name }
        });

        if (existingCategory) throw new Error("Category already exists");

        const mappedCategory = CategoryMapper.toDB(categoryData);
        const category = await CategoryModel.create(mappedCategory);
        return CategoryMapper.toEntity(category);

    }

    async update(category: Category): Promise<Category | null> {
        const existingCategory = await CategoryModel.findByPk(category.id);

        if (!existingCategory)throw new Error("Category not found")

        const newCategory = await CategoryModel.findOne({
            where: { name: category.name }
        });

        if (newCategory) throw new Error("Category with the new name already exists");
        
        const mappedCategory = CategoryMapper.toDB(category);
        const updatedCategory = await existingCategory.update(mappedCategory);

        return CategoryMapper.toEntity(updatedCategory);
    }

    async delete(id: string): Promise<void> {

        if (!id) throw new Error("Id is required");
        await CategoryModel.destroy({
            where: { id }
        });

    }
}