import { DataTypes, Model, UUIDV1 } from 'sequelize';
import sequelize from '../../connection';


class Author extends Model {
    [x: string]: any;
}
Author.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV1,
    },
    fullName:{
      type:DataTypes.STRING,
      allowNull: true
    },
    
}, {
    sequelize});


Author.sync();

export default Author;