import { User, UserAttributes } from "../../../domain/entities/users.entity";
import { UserRepository } from "../../../domain/repository/user-repository";
import { UserModel } from "../model/user-model";


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
            data.id || '', 
            data.fullName || '',
            data.email || '',
            data.password || ''
        );
        

        user.setPassword(data.password || ''); // Hash the password

        await UserModel.create({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            password: user.password
        });

        return user;
    }

    async findById(id: string): Promise<User | null> {
        const user=await UserModel.findByPk(id);
        return user ? user.toJSON() as User : null

    }
    update(updateData: User): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users.map(userModel => userModel.toJSON() as User);
    }
    

}