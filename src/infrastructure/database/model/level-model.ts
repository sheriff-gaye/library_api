import { Model, DataTypes } from 'sequelize';
import { LevelAttributes } from "../../../application/interface/level-interface";
import sequelize from "../../config/databaseConfig";


class LevelModel extends Model<LevelAttributes> implements LevelAttributes {
    id!: string;
    code!: string;
    name!: string;

}

LevelModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize
})

LevelModel.sync();

export {LevelModel}