import { DataTypes, Model, UUID, UUIDV1 } from 'sequelize';
import sequelize from '../../connection';

class Category extends Model {
    [x: string]: any;
}

Category.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV1, // Corrected value here
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Category',
});

Category.sync({alter:{drop:false}});

export default Category;
