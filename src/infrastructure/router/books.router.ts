import express from "express";
import { CreateBooksController } from "../../application/controllers/books/create-controller";
import { GetAllBooksController } from "../../application/controllers/books/getAll-controller";


const booksRouter = express.Router();


const createBookController=new CreateBooksController();
const getAllBooksController=new GetAllBooksController();


booksRouter.post('/books',(req,res)=>createBookController.createBooks(req,res));
booksRouter.get('/books',(req,res)=>getAllBooksController.getCategory(req,res));


export default booksRouter;


