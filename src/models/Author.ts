
import { DataTypes, Model, UUIDV1 } from 'sequelize';
import sequelize from '../../connection';
import Books from './Books';

class Author extends Model {}

Author.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV1,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize
});

Author.sync();

export default Author;
