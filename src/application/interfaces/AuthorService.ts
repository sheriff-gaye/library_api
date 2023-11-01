import { Author } from '../../domain/entities/Author';

export interface AuthorService {
  createAuthor(name: string): Promise<Author>;
  updateAuthor(id: string, name: string): Promise<Author | null>;
  deleteAuthor(id: string): Promise<boolean>;
  getAuthorById(id: string): Promise<Author | null>;
  getAllAuthors(): Promise<Author[]>;
}
