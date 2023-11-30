import { DataTypes, Model } from "sequelize";
import { ReturnIssueAttributes } from "../../../domain/entities/return-entity";
import sequelize from "../../config/databaseConfig";
import { IssueModel } from "./issue-model";
import { BooksModel } from "./books-model";
import { StudentModel } from "./student-model";

export class ReturnModel extends Model<ReturnIssueAttributes> implements ReturnIssueAttributes {
    id!: string;
    issueId!: string;
    returnDate!: Date;
    studentId!: string;
    bookId!: string;
    status!: string;
}

ReturnModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    issueId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: IssueModel, 
            key: 'id',
        },
    },
    bookId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: BooksModel, 
            key: 'id',
        },
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    studentId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: StudentModel, 
            key: 'id',
        },
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize
});

ReturnModel.sync();
