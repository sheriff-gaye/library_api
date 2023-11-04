import { Request, Response } from 'express';
import { CreateLevelUseCase } from '../../use-cases/Level/create-use-case';
import { GetAllLevelUseCase } from '../../use-cases/Level/get-all-use-case';
import { LevelRepositoryImpl } from '../../../infrastructure/database/repository/level-repository';
import { DeleteLevelUseCase } from '../../use-cases/Level/delete-use-case';
import { UpdateLevelUseCase } from '../../use-cases/Level/update-use-case';

const levelRepository = new LevelRepositoryImpl();
const createLevelUseCase = new CreateLevelUseCase(levelRepository);
const getAllLevelUseCase = new GetAllLevelUseCase(levelRepository);
const deleteLevelUseCase = new DeleteLevelUseCase(levelRepository);
const updateLevelUseCase = new UpdateLevelUseCase(levelRepository);

export const createLevel = async (req: Request, res: Response) => {
    try {
        const { code, name } = req.body;
        if (!code) {
            return res.status(400).json({ message: "Code is required" })
        }
        if (!name) {
            return res.status(400).json({ message: "Name is required" })
        }
        const newLevel = await createLevelUseCase.execute(code, name);

        res.status(200).json(newLevel);
        
    } catch (error) {
        res.status(400).json({ error: 'Level with the same name or code already exists' });
    }
};

export const getLevels = async (req: Request, res: Response) => {
    try {
        const levels = await getAllLevelUseCase.execute();
        res.status(200).json(levels);
    } catch (error) {
        res.status(400).json({ message: "Something went wrong" });
    }
};


export const updateLevel = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, code } = req.body;
        const updatedLevel = await updateLevelUseCase.execute(id, name, code);
        res.json(updatedLevel);

    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
}

export const deleteLevel = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const level = await deleteLevelUseCase.execute(id);
        res.status(200).json({ message: "Level Deleted Successfully" });
    } catch (error) {

        res.status(404).json({ message: "Something went wrong" });

    }


}
