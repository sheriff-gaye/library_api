import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../../../connection';

class Category extends Model {
  
}

Category.init(
  {
    id: {
      type: DataTypes.UUID, 
      primaryKey:true,
      defaultValue:UUIDV4
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Category',
  }
);

Category.sync();

export { Category };
