import { User } from "../../../domain/entities/users.entity";
import {  AuthRepository } from '../../../domain/repository/user-repository';

export class LoginUseCase {
    constructor(private authRepository:AuthRepository ) {}

    async execute(email: string, password: string): Promise<User | null> {
        const user = await this.authRepository.findByCredentials(email, password);
        
        if (!user) {
            return null; 
        }
        return user;
    
    }
}