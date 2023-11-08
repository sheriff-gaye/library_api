
import { Request, Response } from 'express';
import { LevelRepositoryImpl } from '../../../infrastructure/database/repository/level-repository';
import { UpdateLevelUseCase } from '../../use-cases/Level/update-use-case';

export class UpdateLevelController{

    private updateLevelUseCase:UpdateLevelUseCase

    constructor(){
        const levelRepository = new LevelRepositoryImpl();
        this.updateLevelUseCase = new UpdateLevelUseCase(levelRepository);
    }


async updateLevel (req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, code } = req.body;
        const updatedLevel = await this.updateLevelUseCase.execute(id, name, code);
        res.json(updatedLevel);

    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
}


}