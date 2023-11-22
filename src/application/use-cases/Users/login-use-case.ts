import { User } from "../../../domain/entities/users.entity";
import { UserRepository } from "../../../domain/repository/user-repository";

export class LoginUseCase {
    constructor(private userRepository:UserRepository ) {}

    async execute(email: string, password: string): Promise<User | null> {
        const user = await this.userRepository.findByCredentials(email, password);
        
        if (!user) {
            return null; 
        }
        return user;
    
    }
}