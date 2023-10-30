import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_secret_key';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.cookies['token'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthenticated' });
    }

    try {
        const decoded = await jwt.verify(token, JWT_SECRET);

        //@ts-ignore
        req.userId = decoded.userId;

        next();
    } catch (error) {

        return res.status(401).json({ message: 'Unauthorized' });
    }
};
