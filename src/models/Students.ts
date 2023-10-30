import { DataTypes, Model, UUIDV1 } from "sequelize";
import sequelize from '../../connection';
import Level from "./Level";


class Students extends Model {

}

Students.init({

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV1
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    student_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    levelId: {
        type: DataTypes.UUID,
        allowNull: false
    },
},
    {
        sequelize
    });

Students.belongsTo(Level, { foreignKey: 'levelId' });


Students.sync();



export default Students