import { LevelMapper } from "../../application/mappers/level-mappers";
import { Level } from "../../domain/entities/level-entity";
import { LevelRepository } from "../../domain/repository/level-repository";
import { LevelModel } from "../database/model/level-model";


export class LevelRepositoryImpl implements LevelRepository {

  private levelModel:typeof LevelModel

  constructor(){
    this.levelModel=LevelModel
  }

  async create(levelData: Level): Promise<Level> {
    const existingLevel = await this.levelModel.findOne({
      where: { name: levelData.name }
    });

    if (existingLevel) throw new Error('Level with the same name already exists');

    const mappedLevels = LevelMapper.toDB(levelData);
    const level = await this.levelModel.create(mappedLevels);
    return LevelMapper.toEntity(level);
  }

  async findById(id: string): Promise<Level | null> {
    const level = await this.levelModel.findByPk(id);
    return LevelMapper.toEntity(level);

  }
  async update(level: Level): Promise<Level | null> {
    const levels = await this.levelModel.findByPk(level.id);
    if (!levels) throw new Error("Level Not Found");
    const mappedLevels = LevelMapper.toDB(level);
    const updated= await levels.update(mappedLevels);
    return LevelMapper.toEntity(updated);
  }
  async delete(id: string): Promise<void> {
    await this.levelModel.destroy({
      where: { id }
    })
  }
  async getAll(): Promise<Level[]> {
    const levels = await this.levelModel.findAll();
    return levels.map((level) => LevelMapper.toEntity(level));
  }

}