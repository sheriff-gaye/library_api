import { Category } from "../../../domain/entities/category-entity";
import { CategoryRepository } from "../../../domain/repository/category-repository";
import { CategoryAttributs } from "../../interface/category-interface";


export class GetAllCatgoriesUseCases{

    constructor (private categoryRepository:CategoryRepository){}

    async execute():Promise<Category[]>{
        return await this.categoryRepository.getAll();
    }
}