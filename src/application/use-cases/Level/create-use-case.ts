import { Level } from "../../../domain/entities/level-entity";
import { LevelRepository } from "../../../domain/repository/level-repository";
import { LevelMapper } from "../../mappers/level-mappers";
import { LevelRequest } from "./request";
import { LevelResponse } from './response';


export class CreateLevelUseCase {
    constructor(
        private levelRepository: LevelRepository
    ) { }

    async execute(request:LevelRequest):Promise <LevelResponse> {
        const newLevelData =LevelMapper.toEntity(request);
        return await this.levelRepository.create(newLevelData);

    }
}