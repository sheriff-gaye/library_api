import { Category } from "../entities/category-entity";

export interface CategoryRepository{
    create(categoryData:Partial<Category>):Promise <Category>
    findById(id:string):Promise<Category>
    update(author:Category):Promise <Category>
    delete(id:string):Promise<void>
    getAll():Promise<Category[]>
}