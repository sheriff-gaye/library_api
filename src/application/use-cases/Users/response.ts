import { User } from "../../../domain/entities/users.entity";

export type UserResponse=Promise<User> | null