import { LevelRepository } from "../../../domain/repository/level-repository";


export class DeleteLevelUseCase{
    constructor(
        private levelRepository:LevelRepository
    ){}

    async execute (id:string){
        await this.levelRepository.delete(id);
    }
}