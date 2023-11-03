import { Level } from "../entities/level-entity";



export interface LevelRepository{
    create(levelData:Partial<Level> ):Promise<Level>
    findById(id:string):Promise<Level | null>
    update(level:Level):Promise<Level | null>
    delete(id:string):Promise<void>
    getAll():Promise<Level[]>
}