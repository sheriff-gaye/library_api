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
            const { title, description, publisher, publish_date, copies, category, author, authorId, categoryId } = req.body;
            if (!authorId) {
                res.json({ message: "Author is required" });
            }
            if (!categoryId) {
                res.json({ message: "Category is required" })
            }
            return await this.createBooksUseCase.execute(title, description, publisher, publish_date, copies);
        } catch (error) {
            res.json({ message: "Book with this title Already Exist" });
        }
    }
}
