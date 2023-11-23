import {  AuthRepository } from '../../../domain/repository/user-repository';

export class LogoutUseCase{

    constructor(
        private authRepository:AuthRepository
    ){}

    async execute(id:string){
        const user = await this.authRepository.logout(id);
        return user

    }

}