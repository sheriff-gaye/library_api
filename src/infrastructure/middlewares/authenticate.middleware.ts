import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../../domain/repository/user-repository';
import { TokenService } from '../../application/helpers/token';
import { User } from '../../domain/entities/users.entity';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}

export class AuthenticationMiddleware {
  private userRepository: UserRepository;
  private excludedRoutes: string[];

  constructor(userRepository: UserRepository, excludedRoutes: string[] = []) {
    this.userRepository = userRepository;
    this.excludedRoutes = excludedRoutes;
  }

  public handleAuthentication = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
             
      const token = req.headers.authorization || req.cookies['token'];
      if (this.excludedRoutes.includes(req.path)) {
        return next();
      }

      if (!token) {
        return res.status(401).json({ message: 'UnAuthunticated' });
      }

      const decodedToken: any = TokenService.verifyToken(token);

      const user = await this.userRepository.findById(decodedToken.userId);

      if (!user) {
        return res.status(401).json({ message: 'Unauthorized: Invalid user' });
      }
      console.log('Middleware: Authentication successful');

      req.user = user;

      next();
    } catch (error) {
      console.error('Authentication middleware error:', error);
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
}
