import { Category } from "../../../domain/entities/category-entity";
import { CategoryRepository } from "../../../domain/repository/category-repository";


export class UpdateCategoryUseCase{
    constructor(
        private categoryRepository:CategoryRepository
    ){}

    async execute(id:string , name:string):Promise<Category | null>{
        const category = await this.categoryRepository.findById(id);
        if(!category){
            return null
        }
        category.name=name;
        const updatedCategory= await this.categoryRepository.update(category);
        return updatedCategory
    }
}