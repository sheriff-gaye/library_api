import { Request, Response } from 'express';
import { LevelRepositoryImpl } from '../../../infrastructure/repository/level-repository';
import { DeleteLevelUseCase } from '../../use-cases/Level/delete-use-case';



export class DeleteLevelController {
    private deleteLevelUseCase: DeleteLevelUseCase
    constructor() {
        const levelRepository = new LevelRepositoryImpl();
        this.deleteLevelUseCase = new DeleteLevelUseCase(levelRepository);

    }
    async deleteLevel(req: Request, res: Response) {

        try {
            const { id } = req.params
            await this.deleteLevelUseCase.execute(id);
            res.status(200).json({ message: "Level Deleted Successfully" });
        } catch (error) {

            res.status(404).json({ message: "Something went wrong" });

        }


    }


}