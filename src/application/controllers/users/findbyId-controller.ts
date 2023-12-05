import { UserRepositoryImpl } from "../../../infrastructure/repository/user-repository";
import { findUserById } from "../../use-cases/Users/findById-use-case";
import { Request, Response } from "express";

export class findUserByidController {

    private readonly findUserById: findUserById

    constructor() {
        const userRepository = new UserRepositoryImpl();
        this.findUserById = new findUserById(userRepository);

    }

    async findById(req: Request, res: Response) {
        try {

            const { id } = req.params

            const user = await this.findUserById.execute(id);
            return res.status(200).json(user);

        } catch (error: any) {
            res.json({ error: error.message })

        }
    }
}