import { DataTypes, Model, Optional, UUIDV4 } from "sequelize";
import sequelize from "../../config/databaseConfig";
import { AuthorAttributes } from '../../../domain/entities/author-entity';

class AuthorModel extends Model<AuthorAttributes> implements AuthorAttributes {
  public id!: string;
  public firstName!: string;
  public lastName!: string;
}

AuthorModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize,
   
  }
);

AuthorModel.sync();

export { AuthorModel };
