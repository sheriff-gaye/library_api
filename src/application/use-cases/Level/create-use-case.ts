import { Level } from "../../../domain/entities/level-entity";
import { LevelRepository } from "../../../domain/repository/level-repository";


export class CreateLevelUseCase {
    constructor(
        private levelRepository: LevelRepository
    ) { }

    async execute( code: string, name: string):Promise <Level> {
        const newLevelData: Partial<Level> = { code, name}
        return await this.levelRepository.create(
            newLevelData
        );

    }
}