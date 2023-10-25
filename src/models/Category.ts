import { DataTypes, Model, UUIDV1 } from 'sequelize';
import sequelize from '../../connection';
import Books from './Books';

class Category extends Model {
    [x: string]: any;
}

Category.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV1,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize
});

// Category.hasMany(Books, { foreignKey: 'categoryId' });


Category.sync();

export default Category;
