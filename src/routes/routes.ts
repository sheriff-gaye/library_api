
import express from "express";
const router = express.Router();

import { createCategory, deleteCategory, getCategory, updateCategory } from '../controllers/categoryController';
import { createUsers, deleteUser, getUsers, updateUsers } from "../controllers/userController";
import { createAuthor, deleteAuthor, getAuthor, updateAuthor } from "../controllers/authorsController";
import { createBook, deleteBooks, getBooks, getSingleBook, updateBooks } from "../controllers/booksController";
import { createLevel, deleteLevel, getLevel, updateLevel } from "../controllers/levelController";
import { getStudents, createStudent, getSingleStudent } from '../controllers/studentController';
import { loginUser, logoutUser } from "../controllers/authController";
import { authMiddleware } from "../middleware";


router.post('/login',loginUser);
router.get('/logout', logoutUser);


router.get('/category', getCategory);
router.post('/category', createCategory);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

router.get('/users', getUsers);
router.post('/register', createUsers);
router.patch('/users/:id', updateUsers);
router.delete('/users/:id', deleteUser);

router.get('/author', getAuthor);
router.post('/author', createAuthor);
router.patch('/author/:id', updateAuthor);
router.delete('/author/:id', deleteAuthor)



router.get('/books', getBooks);
router.get('/books/:id', getSingleBook);
router.post('/books', createBook);
router.patch('/books/:id', updateBooks);
router.delete('/books/:id', deleteBooks);

router.get('/levels', getLevel);
router.post('/levels', createLevel);
router.patch('/levels/:id', updateLevel);
router.delete('/levels/:id', deleteLevel);


router.get('/students', getStudents);
router.get('/students/:id',getSingleStudent);
router.post('/createstudents', createStudent);






export default router;