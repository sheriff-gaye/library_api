import { UserRepository } from "../../../domain/repository/user-repository";


export class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(id: string) {
        await this.userRepository.delete(id);
    }
}