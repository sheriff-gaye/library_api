import { User } from "../../domain/entities/users.entity";
import { UserRepository } from "../../domain/repository/user-repository";
import { UserModel } from "../database/model/user-model";

export class UserRepositoryImpl implements UserRepository {
   
    async register(data: User): Promise<User> {
        const existingUser = await UserModel.findOne({
            where: {
                email: data.email,
            },
        });

        if (existingUser) {
            throw new Error('Email already in use');
        }

        const user = new User(
            data.id || '',
            data.fullName || '',
            data.email || '',
            data.password || ''
        );

        await user.setPassword(data.password || '');

        await UserModel.create({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            password: user.password,
        });

        return user;
    }

    async findById(id: string): Promise<User | null> {
        const user = await UserModel.findByPk(id);
        return user ? user.toJSON() as User : null;
    }

    async update(updateData: User): Promise<User | null> {
        const existing_user = await UserModel.findByPk(updateData.id);

        const user = new User(
            updateData.id,
            updateData.fullName,
            updateData.email,
            updateData.password
        );
        
        await user.setPassword(updateData.password);
        console.log(await user.setPassword(updateData.password))

        await existing_user?.update(user);

        return existing_user?.toJSON() as User;
    }

    async delete(id: string): Promise<void> {
        await UserModel.destroy({
            where: { id },
        });
    }

    async getAll(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users.map((userModel) => userModel.toJSON() as User);
    }
}
