import { DataTypes, Model, UUID, UUIDV1 } from 'sequelize';
import sequelize from '../../../connection';

class User extends Model {
    [x: string]: any;
}

User.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV1,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
        
    }


}, {sequelize});

User.sync();

export default User;
