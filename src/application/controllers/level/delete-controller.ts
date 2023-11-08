import { Request, Response } from 'express';
import { CreateLevelUseCase } from '../../use-cases/Level/create-use-case';
import { GetAllLevelUseCase } from '../../use-cases/Level/get-all-use-case';
import { LevelRepositoryImpl } from '../../../infrastructure/database/repository/level-repository';
import { DeleteLevelUseCase } from '../../use-cases/Level/delete-use-case';
import { UpdateLevelUseCase } from '../../use-cases/Level/update-use-case';



export class DeleteLevelController {
    private deleteLevelUseCase: DeleteLevelUseCase
    constructor() {
        const levelRepository = new LevelRepositoryImpl();
        this.deleteLevelUseCase = new DeleteLevelUseCase(levelRepository);

    }
    async deleteLevel(req: Request, res: Response) {

        try {
            const { id } = req.params
            const level = await this.deleteLevelUseCase.execute(id);
            res.status(200).json({ message: "Level Deleted Successfully" });
        } catch (error) {

            res.status(404).json({ message: "Something went wrong" });

        }


    }


}