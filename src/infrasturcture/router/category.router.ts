import { Router } from 'express';
import { CategoryService } from '../../domain/services/category-service';

const router = Router();
const categoryService = new CategoryService();

router.post('/categories', async (req, res) => {
  try {
    const { fullname } = req.body;
    const result = await categoryService.createCategory(fullname);
    res.json(result);
  } catch (error) {
    res.status(500).json(`Failed to create a category ${error}`);
  }
});

router.get('/categories', async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json(`Failed to get categories ${error}`);
  }
});

export default router;
