import { UserRepository } from "../../../domain/repository/user-repository";
import { User } from '../../../domain/entities/users.entity';


export class findUserById{

    constructor(private readonly userRepository:UserRepository){}

    async execute(id:string):Promise<User| null>{
        const user = await this.userRepository.findById(id);
        return user

    }



}