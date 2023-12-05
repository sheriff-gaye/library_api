import { Model, DataTypes } from 'sequelize';
import sequelize from "../../config/databaseConfig";
import { UserAttributes } from '../../../domain/entities/users.entity';

class UserModel extends Model<UserAttributes> implements UserAttributes {
    [x: string]: any;
    public id!: string;
    public fullName!: string;
    public email!: string;
    public location!: string;
    public address!: string;
    public phone!: number;
    public profile!:string;
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
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profile:{
        type:DataTypes.STRING,
        allowNull:true
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
