import { User } from "../../domain/entities/users.entity";
import { AuthRepository } from "../../domain/repository/user-repository";
import { UserModel } from "../database/model/user-model";


export class AuthRepositoryImpl implements AuthRepository{
    
    async logout(id: string): Promise<void> {
        await UserModel.findByPk(id);
    }
    async findByCredentials(email: string, password: string): Promise<User | null> {
        const userModel = await UserModel.findOne({
            where: { email: email },
        });

        if (userModel) {
            const user = new User(
                userModel.id || '',
                userModel.fullName || '',
                userModel.email || '',
                userModel.password || ''
            );

            if (user.verifyPassword(password)) {
                return user;
            }
        }
        return null;
    }



}