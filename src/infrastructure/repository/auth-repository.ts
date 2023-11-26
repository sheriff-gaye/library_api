import { UserMapper } from "../../application/mappers/user-mapper";
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
    
          const userEntity = UserMapper.toEntity(userModel); 
    
          if (userEntity.verifyPassword(password)) {
            return userEntity;
          }
      
        return null;
      }


}