import { DataTypes, Model, UUIDV1 } from "sequelize";
import sequelize from '../../connection';
import Author from "./Author";
import Category from "./Category";


class Books extends Model {
    [x: string]: any;
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
    publisher:{
        type:DataTypes.STRING,
        allowNull:false
    },
    publication_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    copies:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    authorId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false, 
    },

}, {
    sequelize
});

Books.belongsTo(Author, { foreignKey: 'authorId' }); 
Books.belongsTo(Category, { foreignKey: 'categoryId' });


Books.sync();

export default Books;
