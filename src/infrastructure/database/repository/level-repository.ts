import { Level } from "../../../domain/entities/level-entity";
import { LevelRepository } from "../../../domain/repository/level-repository";
import { LevelModel } from "../model/level-model";


export class LevelRepositoryImpl implements LevelRepository{

    async create(levelData: Partial<Level>): Promise<Level> {
        return  await LevelModel.create(levelData);
      }
      
    async findById(id:string): Promise<Level | null> {
        const level=await LevelModel.findByPk(id);
        return level ? level.toJSON() as Level : null
        
    }
    async update(level: Level): Promise<Level | null> {
        const levels=await LevelModel.findByPk(level.id);
        if(!levels){
            return null
        }
        return await levels.update(level);
    }
    async delete(id: string): Promise<void> {
       const levels=await LevelModel.destroy({
        where:{id}
       })
       if(!levels){
        console.log("Error in Dleting Level")
       }
    }
    async getAll(): Promise<Level[]> {
       const levels=await LevelModel.findAll();
       return levels
    }

}