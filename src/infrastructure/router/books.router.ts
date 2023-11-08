import express from "express";
import { CreateBooksController } from "../../application/controllers/books/create-controller";
import { GetAllBooksController } from "../../application/controllers/books/getAll-controller";
import { DeleteBooksController } from "../../application/controllers/books/delet-controller";
import { UpdateBooksController } from "../../application/controllers/books/update-controller";


const booksRouter = express.Router();


const createBookController=new CreateBooksController();
const getAllBooksController=new GetAllBooksController();
const deleteBooksController=new DeleteBooksController();
const updateBooksController=new UpdateBooksController();


booksRouter.post('/books',(req,res)=>createBookController.createBooks(req,res));
booksRouter.get('/books',(req,res)=>getAllBooksController.getCategory(req,res));
booksRouter.patch('/books/:id',(req,res)=>updateBooksController.updateBooks(req,res));
booksRouter.delete('/books/:id',(req,res)=>deleteBooksController.deleteBooks(req,res));



export default booksRouter;


