
import { Request, Response } from "express";
import Category from '../models/Category';



export const getCategory = async (req: Request, res: Response) => {
    try {

        const data = await Category.findAll();
        return res.status(200).json(data);       

    } catch (error) {

        console.log("Cannot get Categories")

    }

}


export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        const newCategory = await Category.create({
            name,
        });

        return res.status(201).json(newCategory);
    } catch (error) {
        console.error('Cannot create Categories', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

export const updateCategory = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const { name } = req.body;

        if (name) {
            category.name = name;
        }

        await category.save();

        return res.status(200).json({ message: 'Category updated successfully' });
    } catch (error) {
        console.error('Error updating category', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}


export const deleteCategory = async (req: Request, res: Response) => {

    try {

        const {id}=req.params

        const category=await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        await category.destroy();

        return res.status(200).json({ message: 'Category deleted successfully' });

    } catch (error) {
        console.error('Error Deleting category', error);
        res.status(500).json({ message: 'Internal Server Error' });

    }

}