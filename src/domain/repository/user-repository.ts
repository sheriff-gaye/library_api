import { User } from "../entities/users.entity"

export interface UserRepository {
    register(data: User): Promise<User>
    findById(id: string): Promise<User | null>
    update(updateData: User): Promise<User | null>
    delete(id: string): Promise<void>
    getAll(): Promise<User[]>

}


export interface AuthRepository{
    findByCredentials(email: string, password: string): Promise<User | null>;
    logout(id: string): Promise<void>;
}