import { User } from "../../domain/entities/users.entity";


export class UserMapper{

    public static toDB(user:User):any{
        return{
            id:user.id,
            fullName:user.fullName,
            email:user.email,
            password:user.password,
            createdAt:user.createdAt?.toISOString(),
            updatedAt:user.updatedAt?.toISOString()
        }
        
    }

    public static toEntity(user:any):User{
        return new User({
            id:user.id,
            fullName:user.fullName,
            email:user.email,
            password:user.password,
            createdAt: user.createdAt,
            updatedAt:user.updatedAt
        })

    }
}