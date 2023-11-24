import { Category } from "../entities/category-entity";

export interface CategoryRepository{
    create(categoryData:Category):Promise <Category>
    findById(id:string):Promise<Category | null>
    update(category:Category):Promise <Category | null>
    delete(id:string):Promise<void>
    getAll():Promise<Category[]>
}