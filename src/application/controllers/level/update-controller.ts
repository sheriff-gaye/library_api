
import { Request, Response } from 'express';
import { LevelRepositoryImpl } from '../../../infrastructure/repository/level-repository';
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
        const updatedLevel = await this.updateLevelUseCase.execute({id, name, code});
        res.json(updatedLevel);

    } catch (error:any) {
        return res.status(400).json({ error:error.message });

    }
}

}