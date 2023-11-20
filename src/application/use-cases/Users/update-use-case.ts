import { UserRepository } from "../../../domain/repository/user-repository";

export class UpdateUserUseCase {

    constructor(private userRepository: UserRepository) { }

    async execute(id: string, fullName: string, email: string, password: string) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error("User Not Found");
        }

        user.fullName = fullName;
        user.email = email;
        user.setPassword(password);

        const updatedUser = await this.userRepository.update(user);

        return updatedUser;
    }
}
