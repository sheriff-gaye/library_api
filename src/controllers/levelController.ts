
import { Request, Response } from "express";
import Level from '../models/Level';



export const getLevel = async (req: Request, res: Response) => {
    try {

        const data = await Level.findAll();

        return res.status(200).json(data);

    } catch (error) {
        return res.status(400).json({ message: "error in getting levels" });

    }
}



export const createLevel = async (req: Request, res: Response) => {
    try {
        const { level_name, code } = req.body;

        const newCategory = await Level.create({
            level_name, code
        });

        return res.status(200).json(newCategory);
    } catch (error) {
        console.error('Cannot create Level', error);
    }

}




export const updateLevel = async (req: Request, res: Response) => {

    try {

        const { id } = req.params
        const { code, level_name } = req.body

        const level = await Level.findByPk(id);

        if (!level) {
            res.status(400).json({ message: "Level Not Found" });
        }
        await level?.update({
            code, level_name
        });
        return res.status(200).json(level);


    } catch (error) {


        res.status(500).json({ message: "cannot update Level" })

    }

}


export const deleteLevel = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        let level = await Level.destroy({ where: { id } });
        if (!level) {
            throw Error("Level not found");
        }
        return res.status(200).send('Deleted Successfully');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Error Deleting');
    }



}