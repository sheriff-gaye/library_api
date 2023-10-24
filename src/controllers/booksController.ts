import { Response, Request } from 'express';
import Books from '../models/Books';

export const createBoook = async (req: Request, res: Response) => {

    try {

        const { title,description } = req.body;

        const newBook = await Books.create({ title,description });

        res.status(200).json(newBook);

    } catch (error) {
        res.status(500).json({ message: "error in creating book" })


    }
}