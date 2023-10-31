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

router.delete('/authors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await authorService.deleteAuthor(id);
    res.json({ message: "Author with ID  has been deleted" });
  } catch (err) {
    res.json({ error: 'Author not found' });
  }
});


router.patch('/authors/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body; 

    const updatedAuthor = await authorService.updateAuthor(id, name);
    res.status(200).json(updatedAuthor);
    
  } catch (error) {
   
    res.status(500).json({ error: 'Error in Updating Author' });
  }
});
