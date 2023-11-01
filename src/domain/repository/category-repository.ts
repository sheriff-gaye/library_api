import { Category } from '../entities/Category';
import { CategoryAttributes } from '../interfaces/Categories';

export class CategoryRepository {
    async createCategory(fullname: string): Promise<CategoryAttributes> {
        return Category.create({ fullname });
    }

    async getAllCategories(): Promise<CategoryAttributes[]> {
        return Category.findAll();
    }

    async updateCategory(id: string, fullname: string): Promise<CategoryAttributes | null> {
        await Category.update({ fullname }, { where: { id } });

        return Category.findByPk(id);

    }


    async deleteCategory(id: string) {
        return Category.destroy({
            where: { id }
        });
    }
}
