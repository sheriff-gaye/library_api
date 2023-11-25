import { Level } from "../../domain/entities/level-entity";


export class LevelMapper{

    public static toDB(level:Level):any{
        return {
            id: level.id,
            name: level.name,
            code:level.code,
            createdAt:level.createdAt?.toISOString(),
            updatedAt:level.updatedAt?.toISOString(),
        }
    }

    public static toEntity(levelData:any):Level{
        return Level.CreateProperties({
            id: levelData.id,
            name: levelData.name,
            code:levelData.code,
            createdAt:levelData.createdAt,
            updatedAt:levelData.updatedAt,
        });
    }
}