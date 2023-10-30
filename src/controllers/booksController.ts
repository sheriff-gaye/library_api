import { Response, Request, response } from 'express';
import Books from '../models/Books';





export const getBooks = async (req: Request, res: Response) => {
    try {

        const books = await Books.findAll();
        return res.status(200).json(books)

    } catch (error) {
        res.status(500).json({ message: "cannot get books" });

    }
}

export const getSingleBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.id;
        const singleBook = await Books.findOne({ where: { id: bookId } });
        if (!singleBook) {
          return res.status(200).json({message:"Book Not Found"})
        }
        return res.status(200).send(singleBook);


    } catch (error) {
        return res.status(400).json({message:"error in getting the single book"});

    }
}


export const createBook = async (req: Request, res: Response) => {
    try {
        const { title, description, authorId, categoryId, publisher, publication_date, copies } = req.body;

        if (!authorId) {
            return res.status(400).json({ message: "AuthorId is required" });
        }

        if (!categoryId) {
            return res.status(400).json({ message: "CategoryId is required" });
        }

        const existingBook = await Books.findOne({
            where: { title }
        });

        if (existingBook) {
            return res.status(409).json({ message: "This book already exists" });
        }

        const newBook = await Books.create({ title, description, authorId, categoryId, copies, publisher, publication_date });

        res.status(201).json(newBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error in creating a book" });
    }
}



export const updateBooks = async (req: Request, res: Response) => {

    try {
        const { id } = req.params

        const books = await Books.findByPk(id);


        if (!books) {
            return res.status(404).json({ message: "Book Not Found" });
        }

        const { title, description, publisher, publication_date, copies, authorId, categoryId } = req.body


        books.title = title
        books.description = description
        books.publisher = publisher
        books.publication_date = publication_date
        books.copies = copies
        books.authorId = authorId
        books.categoryId = categoryId
        await books.save();
        res.status(200).json({ message: "Updated Successfully" });


    } catch (error) {
        res.status(500).json({ message: 'Error in Updating Categories' });

    }
}


export const deleteBooks = async (req: Request, res: Response) => {

    try {

        const { id } = req.params
        const books = await Books.findByPk(id);

        if (!books) {

            return res.status(200).json({ message: "Book Not Found" });
        }

        await books.destroy();

        return res.status(200).json({ message: 'Book deleted successfully' });


    } catch (error) {
        res.status(500).json({ message: 'Error in Deleting Book' });

    }
}