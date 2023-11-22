import { User } from "../../../domain/entities/users.entity";
import { UserRepository } from "../../../domain/repository/user-repository";
import { v4 as uuidv4 } from 'uuid';


export class CreateUserUseCase{

    constructor(private userRepository: UserRepository) {}

    async execute(fullName: string, email: string, password: string): Promise<User> {
        const newUser = new User(uuidv4(), fullName, email, password);
        newUser.setPassword(password); 
        const user = await this.userRepository.register(newUser);
        return user;
    }
}