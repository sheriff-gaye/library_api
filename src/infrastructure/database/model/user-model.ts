import { Model, DataTypes } from 'sequelize';
import sequelize from "../../config/databaseConfig";
import { UserAttributes } from '../../../domain/entities/users.entity';


class UserModel extends Model<UserAttributes> implements UserAttributes {
    [x: string]: any;
    id!: string;
    fullName!: string ;
    email!: string;
    password!: string;
}

UserModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize
})

UserModel.sync();

export {UserModel}