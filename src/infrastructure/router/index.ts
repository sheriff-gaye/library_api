import express from 'express';
import authorRouter from './author.router';
import categoryRouter from './category.router';
import levelRouter from './level.router'
import booksRouter from './books.router';
import studentRouter from './students.router';
import userRouter from './user.router';
import { UserRepositoryImpl } from '../repository/user-repository';
import { AuthenticationMiddleware } from '../middlewares/authenticate.middleware';

const router = express.Router();

const userRepository = new UserRepositoryImpl();
const excludedRoutes = ['/register', '/login','/students/create'];
const authMiddleware = new AuthenticationMiddleware(userRepository, excludedRoutes);

router.use(authMiddleware.handleAuthentication);

router.use('/', authorRouter);

router.use('/', categoryRouter);
router.use('/',levelRouter)
router.use('/',booksRouter)
router.use('/',studentRouter)
router.use('/',userRouter);
export default router;
