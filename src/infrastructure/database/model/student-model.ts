import { Model, DataTypes } from 'sequelize';
import sequelize from "../../config/databaseConfig";
import { StudentsAttributes } from '../../../domain/entities/student-entity';
import { LevelModel } from './level-model';


class StudentModel extends Model<StudentsAttributes> implements StudentsAttributes {
    id!: string;
    firstname!: string;
    lastname!: string;
    email!: string;
    phone!: string;
    gender!: string;
    dob!: Date;
    levelId!: string;
    studentId!: string;
}

StudentModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    levelId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    studentId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize
})

StudentModel.sync();
StudentModel.belongsTo(LevelModel, { foreignKey: 'levelId' });

export {StudentModel}