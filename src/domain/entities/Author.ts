import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from '../../../connection';
import { AuthorAttributes } from "../interfaces/Author";


class Author extends Model<AuthorAttributes> implements AuthorAttributes {
    
    public id!: string;
    public name!: string;

}
Author.init({

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        sequelize,
        modelName: 'Author',
    }
);

Author.sync();

export  { Author}

