import { UserRepository } from "../../../domain/repository/user-repository";
import { User } from '../../../domain/entities/users.entity';

export class UpdateUserUseCase {

    constructor(private userRepository: UserRepository) { }

    async execute(id: string, fullName: string, email: string, password: string) {
       try {
        const user = await this.userRepository.findById(id);
        if (!user) throw new Error("User Not Found")

        user.fullName=fullName
        user.email=email
        // user.setPassword(password);
    
        const updatedUser = await this.userRepository.update(user);

        return updatedUser;
        
       } catch (error) {
        console.log("Update p:",error)
       }
    }
}
