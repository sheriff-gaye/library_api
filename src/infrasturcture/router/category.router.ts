import { Router } from 'express';
import { CategoryService } from '../../domain/services/category-service';

const router = Router();
const categoryService = new CategoryService();

router.post('/category', async (req, res) => {
    try {
        const { fullname } = req.body;
        const result = await categoryService.createCategory(fullname);
        res.json(result);
    } catch (error) {
        res.status(500).json(`Failed to create a category ${error}`);
    }
});

router.get('/category', async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json(`Failed to get categories ${error}`);
    }
});


router.patch('/category/:id', async (req, res) => {
    try {
        const { fullname } = req.body;
        const { id } = req.params
        const updated = await categoryService.upadateCategory(id, fullname);
        res.json(updated)


    } catch (error) {
        res.json({ message: "error in updating category" });

    }
})

router.delete('/category/:id', async (req, res) => {
    try {
        const { id } = req.params
        await categoryService.deleteCategory(id)
        res.json({ message: "Category Deleted Successfully" });

    } catch (error) {

        res.json({ message: "Something went wrong" })

    }
})

export default router;
