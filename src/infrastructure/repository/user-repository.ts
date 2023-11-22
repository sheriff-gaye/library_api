import { User } from "../../domain/entities/users.entity";
import { UserRepository } from "../../domain/repository/user-repository";
import { UserModel } from "../database/model/user-model";

export class UserRepositoryImpl implements UserRepository {
    async logout(id: string): Promise<void> {
       const user=await UserModel.findByPk(id);

       //handling tokens stuffs
    }
    async findByCredentials(email: string, password: string): Promise<User | null> {
        const userModel = await UserModel.findOne({
          where: {
            email: email,
          },
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
    
        console.log('Password verification failed');
        return null;
      }

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
    const user = await UserModel.findByPk(updateData.id);
    await user?.update(updateData);

    return user?.toJSON() as User;
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
