import { UserMapper } from "../../application/mappers/user-mapper";
import { User } from "../../domain/entities/users.entity";
import { UserRepository } from "../../domain/repository/user-repository";
import { UserModel } from "../database/model/user-model";

export class UserRepositoryImpl implements UserRepository {

    async register(data: User): Promise<User> {
        const existingUser = await UserModel.findOne({
            where: { email: data.email }
        });

        if (existingUser) throw new Error('Email already in use');

        const userEntity = UserMapper.toEntity(data);
        await userEntity.setPassword(data.password);
      
        const newUser = await UserModel.create(UserMapper.toDB(userEntity));
        return UserMapper.toEntity(newUser);
    }

    async findById(id: string): Promise<User | null> {
        const user = await UserModel.findByPk(id);
        return UserMapper.toEntity(user);
    }

    async update(updateData: User): Promise<User | null> {
        const existing_user = await UserModel.findByPk(updateData.id);

        if (!existing_user) throw new Error('Email already in use');

        const setUser=UserMapper.toEntity(updateData);
        await setUser.setPassword(updateData.password);

        await existing_user.update(UserMapper.toDB(updateData));
        return UserMapper.toEntity(setUser);
    }

    async delete(id: string): Promise<void> {
        await UserModel.destroy({
            where: { id },
        });
    }

    async getAll(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users.map((item) => UserMapper.toEntity(item));
    }
}
