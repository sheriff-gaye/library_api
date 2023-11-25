import { DataTypes, Model } from "sequelize";
import sequelize from '../../config/databaseConfig';
import { CategoryAttributes } from "../../../domain/entities/category-entity";

class CategoryModel extends Model<CategoryAttributes> implements CategoryAttributes {
    public id!: string;
    public name!: string;
}

CategoryModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
});

CategoryModel.sync();

export { CategoryModel }