import { LevelRepository } from "../../../domain/repository/level-repository";
import { Level } from '../../../domain/entities/level-entity';
import { LevelRequest } from "./request";
import { LevelResponse } from "./response";
import { LevelMapper } from "../../mappers/level-mappers";


export class UpdateLevelUseCase{
    constructor(
        private levelRepository:LevelRepository
    ){

    }

    async execute(request:LevelRequest):Promise<LevelResponse>{
        
        if(!request.id)throw new Error("Id is required");
        const level=await this.levelRepository.findById(request?.id);
        if(!level)throw new Error("Level not found");
       const mappedLevels=LevelMapper.toEntity(request);
        return await this.levelRepository.update(mappedLevels);
       
    }
}