
import express from "express";
const router = express.Router();

import {createCategory, deleteCategory, getCategory, updateCategory} from '../controllers/categoryController';
import { createUsers, deleteUser, getUsers, updateUsers } from "../controllers/userController";


router.get('/category',getCategory);
router.post('/category',createCategory);
router.patch('/category/:id',updateCategory)
router.delete('/category/:id',deleteCategory)



router.get('/users',getUsers);
router.post('/register',createUsers);
router.patch('/users/:id',updateUsers)
router.delete('/users/:id',deleteUser)






export default router;