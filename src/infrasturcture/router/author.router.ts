import { Router } from 'express';
import { AuthorService } from '../../domain/services/author-service';


const router = Router();
const authorService = new AuthorService();

router.post('/authors', async (req, res) => {
  try {
    const { name } = req.body;
    const result = await authorService.createAuthor(name);
    res.json(result);
  } catch (error) {
    res.status(500).json(`Failed to create a category ${error}`);
  }
});

router.get('/authors', async (req, res) => {
  try {
    const categories = await authorService.getAllAuthor();
    res.json(categories);
  } catch (error) {
    res.status(500).json(`Failed to get categories ${error}`);
  }
});

export default router;

// AuthorRouter.ts
router.delete('/authors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await authorService.deleteAuthor(id);
    res.json({ message: "Author with ID  has been deleted" });
  } catch (err) {
    console.error(err);
    res.json({ error: 'Author not found' });
  }
});
