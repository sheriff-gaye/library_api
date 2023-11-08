import { Model, DataTypes } from 'sequelize';
import { BookAttributes } from '../../../domain/entities/book-entity';
import sequelize from "../../config/databaseConfig";
import { AuthorModel } from './author-model';
import { CategoryModel } from './category-model';

export class BooksModel extends Model<BookAttributes> {
    id!: string;
    title!: string;
    description!: Text;
    publisher!: string;
    publish_date!: Date;
    copies!: number;
}

BooksModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT
        },
    
        publisher: {
            type: DataTypes.STRING,
        },
        publish_date: {
            type: DataTypes.DATE,
        },
        copies: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
    }
);

BooksModel.belongsTo(AuthorModel, { foreignKey: 'authorId' });
BooksModel.belongsTo(CategoryModel, { foreignKey: 'categoryId' });

BooksModel.sync();


