import { Category } from "../../domain/entities/category-entity";

export class CategoryMapper {
    public static toDB(category: Category): any {
        return {
            id: category.id,
            name: category.name,
            createdAt: category.createdAt?.toISOString(),
            updatedAt: category.updatedAt?.toISOString(),
        };
    }

    public static toEntity(categoryData: any): Category {
        return Category.CreateProperties({
            id: categoryData.id,
            name: categoryData.name,
            createdAt: categoryData.createdAt,
            updatedAt: categoryData.updatedAt,
        });
    }
}
