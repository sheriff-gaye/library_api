import { User, UserAttributes } from "../../domain/entities/users.entity";
import { UserRepository } from "../../domain/repository/user-repository";
import { UserModel } from "../database/model/user-model";


export class UserRepositoryImpl implements UserRepository {
    async create(data: Partial<UserAttributes>): Promise<User> {
        const existingUser = await UserModel.findOne({
            where: {
                email: data.email
            }
        });

        if (existingUser) {
            throw new Error('Email already in use');
        }

        const user = new User(
            data.id || '', data.fullName || '', data.email || '', data.password || ''
        );

        user.setPassword(data.password || '');

        await UserModel.create({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            password: user.password
        });

        return user;
    }

    async findById(id: string): Promise<User | null> {
        const user = await UserModel.findByPk(id);
        return user ? user.toJSON() as User : null

    }
    async update(updateData: UserAttributes): Promise<User | null> {
        const user = await UserModel.findByPk(updateData.id);
    
        if (!user) {
            return null;
        }
      
         await user.update(updateData);

        return user.toJSON() as User;
    }
    
    async delete(id: string): Promise<void> {
        await UserModel.destroy({
            where: { id }
        });
    }
    async getAll(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users.map(userModel => userModel.toJSON() as User);
    }


}