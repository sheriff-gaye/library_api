import { LevelMapper } from "../../application/mappers/level-mappers";
import { Level } from "../../domain/entities/level-entity";
import { LevelRepository } from "../../domain/repository/level-repository";
import { LevelModel } from "../database/model/level-model";


export class LevelRepositoryImpl implements LevelRepository {

  async create(levelData: Level): Promise<Level> {
    const existingLevel = await LevelModel.findOne({
      where: { name: levelData.name }
    });

    if (existingLevel) throw new Error('Level with the same name already exists');

    const mappedLevels = LevelMapper.toDB(levelData);
    const level = await LevelModel.create(mappedLevels);
    return LevelMapper.toEntity(level);
  }

  async findById(id: string): Promise<Level | null> {
    const level = await LevelModel.findByPk(id);
    return LevelMapper.toEntity(level);

  }
  async update(level: Level): Promise<Level | null> {
    const levels = await LevelModel.findByPk(level.id);
    if (!levels) throw new Error("Level Not Found");
    const mappedLevels = LevelMapper.toDB(level);
    const updated= await levels.update(mappedLevels);
    return LevelMapper.toEntity(updated);
  }
  async delete(id: string): Promise<void> {
    const levels = await LevelModel.destroy({
      where: { id }
    })
  }
  async getAll(): Promise<Level[]> {
    const levels = await LevelModel.findAll();
    return levels.map((level) => LevelMapper.toEntity(level));
  }

}