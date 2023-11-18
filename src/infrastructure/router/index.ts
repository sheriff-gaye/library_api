import express from 'express';
import authorRouter from './author.router';
import categoryRouter from './category.router';
import levelRouter from './level.router'
import booksRouter from './books.router';
import studentRouter from './students.router';
import userRouter from './user.router';

const router = express.Router();

router.use('/', authorRouter);
router.use('/', categoryRouter);
router.use('/',levelRouter)
router.use('/',booksRouter)
router.use('/',studentRouter)
router.use('/',userRouter);

export default router;
