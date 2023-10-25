
import express from "express";
const router = express.Router();

import {createCategory, deleteCategory, getCategory, updateCategory} from '../controllers/categoryController';
import { createUsers, deleteUser, getUsers, updateUsers } from "../controllers/userController";
import { createAuthor, deleteAuthor, getAuthor, updateAuthor } from "../controllers/authorsController";
import { createBook, deleteBooks, getBooks, updateBooks } from "../controllers/booksController";


router.get('/category',getCategory);
router.post('/category',createCategory);
router.patch('/category/:id',updateCategory);
router.delete('/category/:id',deleteCategory);

router.get('/users',getUsers);
router.post('/register',createUsers);
router.patch('/users/:id',updateUsers);
router.delete('/users/:id',deleteUser);

router.get('/author', getAuthor);
router.post('/author',createAuthor);
router.patch('/author/:id',updateAuthor );
router.delete('/author/:id',deleteAuthor)



router.get('/books',getBooks);
router.post('/books', createBook);
router.patch('/books/:id',updateBooks);
router.delete('/books/:id',deleteBooks);






export default router;