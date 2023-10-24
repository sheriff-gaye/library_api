import { DataTypes, Model, UUIDV1 } from "sequelize";
import sequelize from '../../connection';


class Books extends Model {

}

Books.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV1
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },

}, {
    sequelize
});

Books.sync();

export default Books;
