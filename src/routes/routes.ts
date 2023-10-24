
import express from "express";
const router = express.Router();

import {createCategory, deleteCategory, getCategory, updateCategory} from '../controllers/categoryController';
import { createUsers, deleteUser, getUsers, updateUsers } from "../controllers/userController";
import { createAuthor, deleteAuthor, getAuthor, updateAuthor } from "../controllers/authorsController";
import { createBoook } from "../controllers/booksController";


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




router.route('/books').post(createBoook);






export default router;