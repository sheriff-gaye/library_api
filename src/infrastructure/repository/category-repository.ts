import { CategoryMapper } from '../../application/mappers/category-mapper';
import { Category } from '../../domain/entities/category-entity';
import { CategoryRepository } from '../../domain/repository/category-repository';
import { CategoryModel } from '../database/model/category-model';

export class CategoryRepositoryImpl implements CategoryRepository {
    private categoryModel: typeof CategoryModel;

    constructor() {
        this.categoryModel =CategoryModel;
    }

    async findById(id: string): Promise<Category | null> {
        const category = await this.categoryModel.findByPk(id);
        return category?.toJSON() as Category;
    }

    async getAll(): Promise<Category[]> {
        const categories = await this.categoryModel.findAll();
        return categories.map((category) => CategoryMapper.toEntity(category));
    }

    async create(categoryData: Category): Promise<Category> {
        const existingCategory = await this.categoryModel.findOne({
            where: { name: categoryData.name }
        });

        if (existingCategory) throw new Error("Category already exists");

        const mappedCategory = CategoryMapper.toDB(categoryData);
        const category = await this.categoryModel.create(mappedCategory);
        return CategoryMapper.toEntity(category);
    }

    async update(category: Category): Promise<Category | null> {
        const existingCategory = await this.categoryModel.findByPk(category.id);

        if (!existingCategory) throw new Error("Category not found");

        const newCategory = await this.categoryModel.findOne({
            where: { name: category.name }
        });

        if (newCategory) throw new Error("Category with the new name already exists");

        const mappedCategory = CategoryMapper.toDB(category);
        const updatedCategory = await existingCategory.update(mappedCategory);

        return CategoryMapper.toEntity(updatedCategory);
    }

    async delete(id: string): Promise<void> {
        if (!id) throw new Error("Id is required");
        await this.categoryModel.destroy({
            where: { id }
        });
    }
}
