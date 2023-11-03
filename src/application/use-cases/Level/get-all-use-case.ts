import { Level } from "../../../domain/entities/level-entity";
import { LevelRepository } from "../../../domain/repository/level-repository";


export class GetAllLevelUseCase {
    constructor(
        private levelRepository: LevelRepository
    ) {

    }
    async execute(): Promise<Level[]> {
        const allLevels = await this.levelRepository.getAll();
        return allLevels;
    }
}