import express from 'express';
import authorRouter from './author.router';
import categoryRouter from './category.router';
import levelRouter from './level.router'
import booksRouter from './books.router';

const router = express.Router();

router.use('/', authorRouter);
router.use('/', categoryRouter);
router.use('/',levelRouter)
router.use('/',booksRouter)

export default router;
