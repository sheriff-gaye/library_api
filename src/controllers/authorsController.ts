import Author from "../models/Author"
import { Request, Response } from "express";





export const getAuthor = async (req: Request, res: Response) => {


    try {

        const data = await Author.findAll();

        return res.status(200).json(data);

    } catch (error) {

        console.log("annot get Author");

    }
}


export const createAuthor = async (req: Request, res: Response) => {
    try {

        const { fullName } = req.body

        const newAuthor = await Author.create({
            fullName
        });

        return res.status(200).json(newAuthor);

    } catch (error) {

        res.status(400).json({ message: "Cannot create Authors" })

    }
}

export const updateAuthor = async (req: Request, res: Response) => {

    try {

        const { id } = req.params
        const { fullName } = req.body

        const author = await Author.findByPk(id);

        if (!author) {
            res.status(400).json({ message: "Author Not Found" });
        }
        await author?.update({
            fullName
        });
        return res.status(200).json(author);


    } catch (error) {


        res.status(500).json({ message: "cannot update Author" })

    }

}


export const deleteAuthor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        let deletedAuthor = await Author.destroy({ where: { id } });
        if (!deletedAuthor) {
            throw Error("Author not found");
        }
        return res.status(200).send('Deleted Successfully');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Error Deleting');
    }



}

