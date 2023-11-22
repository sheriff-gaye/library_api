import { UserRepository } from "../../../domain/repository/user-repository";

export class LogoutUseCase{

    constructor(
        private userRepository:UserRepository
    ){}

    async execute(id:string){
        const user = await this.userRepository.logout(id);
        return user

    }

}