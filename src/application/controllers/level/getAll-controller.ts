import { Request, Response } from 'express';
import { GetAllLevelUseCase } from '../../use-cases/Level/get-all-use-case';
import { LevelRepositoryImpl } from '../../../infrastructure/repository/level-repository';


export class GetAllLevelController {

    private getAllLevelUseCase: GetAllLevelUseCase
    constructor() {
        const levelRepository = new LevelRepositoryImpl();
        this.getAllLevelUseCase = new GetAllLevelUseCase(levelRepository);
    }

    async getLevels(req: Request, res: Response) {
        try {
            const levels = await this.getAllLevelUseCase.execute();
            res.status(200).json(levels);
        } catch (error:any) {
            return res.status(400).json({ error:error.message });

        }
    };

}
