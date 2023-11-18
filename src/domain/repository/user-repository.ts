import { User } from "../entities/users.entity"

export interface UserRepository {
    create(data: Partial<User>): Promise<User>
    findById(id: string): Promise<User | null>
    update(updateData: User): Promise<User | null>
    delete(id: string): Promise<void>
    getAll(): Promise<User[]>
}