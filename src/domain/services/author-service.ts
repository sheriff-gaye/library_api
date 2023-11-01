import { AuthorAttributes } from '../interfaces/Author';
import { AuthorRepository } from '../repository/author-repository';

const authorRepository = new AuthorRepository();

export class AuthorService {
  async createAuthor(name: string): Promise<AuthorAttributes> {
    return authorRepository.createAuthor(name);
  }

  async getAllAuthor(): Promise<AuthorAttributes[]> {
    return authorRepository.getAllAuthor();
  }

  async updateAuthor(id: string, name: string) {
    return  authorRepository.updateAuthor(id, name);

  }
  
  async deleteAuthor(id: string) {
    return  authorRepository.deleteAuthor(id);

  }
  
  
}
