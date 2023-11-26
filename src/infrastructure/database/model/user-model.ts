import { Model, DataTypes } from 'sequelize';
import sequelize from "../../config/databaseConfig";
import { UserAttributes } from '../../../domain/entities/users.entity';

class UserModel extends Model<UserAttributes> implements UserAttributes {
    [x: string]: any;
    public id!: string;
    public fullName!: string;
    public email!: string;
    public password!: string;
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
});
UserModel.sync();

export { UserModel };
