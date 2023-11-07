import { Request, Response } from 'express';
import { BooksRepositoryImpl } from "../../../infrastructure/database/repository/books-repository";
import { CreateBooksUseCase } from "../../use-cases/books/create-use-case";

export class CreateBooksController {
    private createBooksUseCase: CreateBooksUseCase;

    constructor() {
        const booksRepository = new BooksRepositoryImpl();
        this.createBooksUseCase = new CreateBooksUseCase(booksRepository);
    }

    async createBooks(req: Request, res: Response) {
        try {
            const { title, description, publisher, publish_date, copies } = req.body;
            await this.createBooksUseCase.execute(title, description, publisher, publish_date, copies);
            res.json({ message: "Book created successfully" });
        } catch (error) {
            res.json({ message: "Something went wrong" });
        }
    }
}
