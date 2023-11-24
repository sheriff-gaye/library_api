import { Category } from "../../../domain/entities/category-entity";


export type CreateCategoryResponse=Promise<Category> | null | Promise<void>