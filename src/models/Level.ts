import { DataTypes, Model, STRING, UUIDV1 } from "sequelize";
import sequelize from '../../connection';

class Level extends Model {

}
Level.init({

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV1
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },

    level_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
    , {
        sequelize
    });


Level.sync();

export default Level;