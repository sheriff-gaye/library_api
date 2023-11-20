
import { Request, Response } from 'express';
import { CreateLevelUseCase } from '../../use-cases/Level/create-use-case';
import { LevelRepositoryImpl } from '../../../infrastructure/repository/level-repository';


export class CreateLevelController {

    private createLevelUseCase: CreateLevelUseCase

    constructor() {
        const levelRepository = new LevelRepositoryImpl();
        this.createLevelUseCase = new CreateLevelUseCase(levelRepository);

    }

    async createLevel(req: Request, res: Response) {
        try {
            const { code, name } = req.body;
            if (!code) {
                return res.status(400).json({ message: "Code is required" })
            }
            if (!name) {
                return res.status(400).json({ message: "Name is required" })
            }
            const newLevel = await this.createLevelUseCase.execute(code, name);

            res.status(200).json(newLevel);

        } catch (error) {
            res.status(400).json({ error: 'Level with the same name or code already exists' });
        }
    };
}