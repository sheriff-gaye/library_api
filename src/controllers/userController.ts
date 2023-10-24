import { Request, Response } from "express";
import User from "../models/Users";
import bcrypt  from 'bcrypt';


export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await User.findAll();
        return res.status(200).json(users)

    } catch (error) {
        res.status(500).json({ message: 'Cannot get all user' });
    }
}

export const createUsers = async (req: Request, res: Response) => {

    try {
        const { fullName, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            fullName, email, password:hashedPassword
        });

        return res.status(200).json(newUser);

    } catch (error) {
        res.status(500).json({ message: 'Error in Creating Users' });

    }

}

export const updateUsers = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const { fullName, password, email } = req.body

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: "User not Found" });
        }
        if (fullName || email || password) {
            user.fullName = fullName
            user.password = password
            user.email = email
        }

        await user.save();

        return res.status(200).json({ message: "User Update Successfully" });
    }
    catch (error: any) {
        res.status(500).json({ message: 'Error in Upadating User', error });
    }

}

export const deleteUser = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });

        }

        await user.destroy();

        return res.status(200).json({ message: 'User deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error in Upadating User', error });

    }

}