import { UserRepository } from "../../../domain/repository/user-repository";
import { User } from '../../../domain/entities/users.entity';
import { UserRequest } from "./request";
import { UserMapper } from "../../mappers/user-mapper";

export class UpdateUserUseCase {

    constructor(private userRepository: UserRepository) { }

    async execute(request:UserRequest):Promise <User | null> {
        if(!request.id)throw new Error("Id is Required")

        const old_user = await this.userRepository.findById(request.id);
        if (!old_user) throw new Error("User Not Found")

        const user=UserMapper.toEntity(request);
        user.setPassword(request.password);
        return  await this.userRepository.update(user);

        
        
     
    }
}
