import express from 'express';
import authorRouter from './author.router';
import categoryRouter from './category.router';

const router = express.Router();

router.use('/', authorRouter);
router.use('/', categoryRouter);

export default router;
