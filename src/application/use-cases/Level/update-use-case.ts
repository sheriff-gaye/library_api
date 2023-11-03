import { LevelRepository } from "../../../domain/repository/level-repository";
import { Level } from '../../../domain/entities/level-entity';


export class UpdateLevelUseCase{
    constructor(
        private levelRepository:LevelRepository
    ){

    }

    async execute(id:string,name:string,code:string):Promise<Level | null>{
        const level=await this.levelRepository.findById(id);
        if(!level){
            return null
        }
        level.code=code
        level.name=name

        return await this.levelRepository.update(level);
       
    }
}