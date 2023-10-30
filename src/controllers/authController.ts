import { Response, Request } from 'express';
import User from '../models/Users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_secret_key';

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Validate the incoming request data
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: "Password does not match" });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        // Set the token as an HTTP-only cookie
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

        return res.status(200).json({ message: "User logged in successfully" });

    } catch (error) {
        res.status(500).json({ message: 'Error in login', error });
    }
};

export const logoutUser = (req: Request, res: Response) => {
    // Clear the token cookie on logout
    res.clearCookie('token');
    res.status(200).json({ message: 'User logged out successfully' });
};
