import { User } from "../../../domain/entities/users.entity";
import { UserRepository } from "../../../domain/repository/user-repository";


export class GetAllUsersUseCase{

    constructor(
        private userRepository:UserRepository
    ){}


    async execute():Promise<User[]>{
        const users=await this.userRepository.getAll();
        return users

    }
}