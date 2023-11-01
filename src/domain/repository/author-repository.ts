// AuthorRepository.ts
import { Author } from '../entities/Author';

export interface AuthorRepository {
  create(author: Author): Promise<Author>;
  update(author: Author): Promise<Author | null>;
  delete(id: string): Promise<boolean>;
  getById(id: string): Promise<Author | null>;
  getAll(): Promise<Author[]>;
}
