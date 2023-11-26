import { User } from "../../../domain/entities/users.entity";
import { UserRepository } from "../../../domain/repository/user-repository";
import { UserRequest } from "./request";
import { UserMapper } from "../../mappers/user-mapper";

export class CreateUserUseCase{

    constructor(private userRepository: UserRepository) {}

    async execute(request:UserRequest): Promise<User | null> {

        const newUser =UserMapper.toEntity(request);
        newUser.setPassword(request.password); 
        return await this.userRepository.register(newUser);
    }
}