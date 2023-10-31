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


async deleteAuthor(id: string): Promise<void> {
    await authorRepository.deleteAuthor(id);
}

  
}
