import { Request, Response } from 'express';
import { BooksRepositoryImpl } from "../../../infrastructure/repository/books-repository";
import { CreateBooksUseCase } from "../../use-cases/books/create-use-case";

export class CreateBooksController {
    private createBooksUseCase: CreateBooksUseCase;

    constructor() {
        const booksRepository = new BooksRepositoryImpl();
        this.createBooksUseCase = new CreateBooksUseCase(booksRepository);
    }

    async createBooks(req: Request, res: Response) {
        try {
            const { title, description, publisher, publish_date, copies, authorId, categoryId } = req.body;
            if (!authorId) {
                res.json({ message: "Author is required" });
            }
            if (!categoryId) {
                res.json({ message: "Category is required" })
            }
            const newBook = await this.createBooksUseCase.execute(title, description, publisher, publish_date, copies, authorId, categoryId);
            res.json(newBook);
        } catch (error) {
            res.json({ message: "Something went Wrong" });
        }
    }
}
