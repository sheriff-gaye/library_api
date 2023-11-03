import { DataTypes, Model } from "sequelize";
import { CategoryAttributs } from "../../../application/interface/category-interface";
import sequelize from '../../config/databaseConfig';
import { AuthorModel } from "./author-model";

class CategoryModel extends Model<CategoryAttributs> implements CategoryAttributs {
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