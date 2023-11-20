import { BooksRepositoryImpl } from "../../../infrastructure/repository/books-repository";
import { DeleteBooksUseCase } from "../../use-cases/books/delete-use-case";
import { Request, Response } from 'express';


export class DeleteBooksController {

    private deleteBookUseCase: DeleteBooksUseCase

    constructor() {
        const bookRepository = new BooksRepositoryImpl();
        this.deleteBookUseCase = new DeleteBooksUseCase(bookRepository);

    }

    async deleteBooks(req: Request, res: Response) {
        try {

            const { id } = req.params;

            if (!id) {
                res.json({ message: "Id is Required" });
            }
            await this.deleteBookUseCase.execute(id);

            return res.status(200).json({ message: "Book Deleted Successully" });
        } catch (error) {

            res.status(400).json({ message: "Something Went Wrong" });

        }

    }
}