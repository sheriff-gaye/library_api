import { Category } from "../../../domain/entities/category-entity";
import { CategoryRepository } from "../../../domain/repository/category-repository";


export class GetAllCatgoriesUseCases{

    constructor (private categoryRepository:CategoryRepository){}

    async execute():Promise<Category[]>{
        return await this.categoryRepository.getAll();
    }
}