import { UserRepositoryImpl } from "../../../infrastructure/repository/user-repository";
import { TokenService } from "../../helpers/token";
import { LoginUseCase } from "../../use-cases/Users/login-use-case";
import { Request, Response } from 'express';
import { AuthRepositoryImpl } from '../../../infrastructure/repository/auth-repository';


export class LoginController {

    private loginUseCase: LoginUseCase

    constructor() {
        const userRepository = new AuthRepositoryImpl();
        this.loginUseCase = new LoginUseCase(userRepository)
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                res.json({ message: "Email and Password are required" });
            }
            const user = await this.loginUseCase.execute(email, password);

            if (user) {
                const token = TokenService.generateToken({ userId: user.id });

                res.cookie('token', token, { httpOnly: true, maxAge: 3600000, sameSite: 'none', secure: true });
                
                res.header('Authorization', `Bearer ${token}`);

                res.json({ token });

            } else {
                return res.status(400).json({ message: "Invalid email or password" });
            }

        } catch (error:any) {
            res.status(500).json({ error: error.message });
        }
    }
}