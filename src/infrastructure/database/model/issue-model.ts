import { Model, DataTypes } from 'sequelize';
import { IssueAttributes } from "../../../domain/entities/issue.entity";
import sequelize from '../../config/databaseConfig';
import { StudentModel } from './student-model';
import { BooksModel } from './books-model';

export class IssueModel  extends Model <IssueAttributes> implements IssueAttributes{
    id!: string;
    bookId!: string;
    studentId!: string;
    issueDate!: Date;
    returnDate!: Date;
    status!: string;

}

IssueModel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    bookId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: BooksModel,
            key: 'id'
        }
    },
    studentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: StudentModel,
            key: 'id'
        }
    },
    issueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    returnDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"Issued"
    },
    
}, {
    sequelize,
});


IssueModel.sync()
