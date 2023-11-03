import { CategoryRepository } from "../../../domain/repository/category-repository";

export class DeleteCategoryUseCase{
    constructor(
        private categoryRepository:CategoryRepository
    ){}
    async execute(id:string){
        await this.categoryRepository.delete(id);
    }
}