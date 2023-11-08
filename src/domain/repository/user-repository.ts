import { User } from "../entities/users.entity"

export interface UserRepository {
    create(categoryData: Partial<User>): Promise<User>
    findById(id: string): Promise<User | null>
    update(category: User): Promise<User | null>
    delete(id: string): Promise<void>
    getAll(): Promise<User[]>
}