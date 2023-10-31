import { Author } from '../entities/Author';
import { AuthorRepository } from '../repository/author-repository';

const authorRepository = new AuthorRepository();

export class AuthorService {
  static getAllAuthors() {
      throw new Error('Method not implemented.');
  }
  async createAuthor(name: string): Promise<Author> {
    return authorRepository.createAuthor(name);
  }

  async getAllAuthor(): Promise<Author[]> {
    return authorRepository.getAllAuthor();
  }

  async updateAuthor(id: string, name: string): Promise<void> {
    const affectedRows = await authorRepository.updateAuthor(id, name);
  
    if (affectedRows === 0) {
      throw new Error('Author not found');
    }

  }
  
  async deleteAuthor(id: string): Promise<void> {
    const deletedCount = await authorRepository.deleteAuthor(id);
  
    if (deletedCount === 0) {
      throw new Error('Author not found');
    }
  }
  
  
}
