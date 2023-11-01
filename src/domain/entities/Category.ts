import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../../../connection';
import { CategoryAttributes } from '../interfaces/Categories';

class Category extends Model <CategoryAttributes> implements CategoryAttributes {
    
    public id!:string;
    public fullname!:string;
  
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
