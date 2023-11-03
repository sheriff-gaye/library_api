import { Author } from "../entities/author-entity";

export interface AuthorRepository {
  create(authorData: Partial<Author>): Promise<Author>;
  findById(id: string): Promise<Author| null>;
  update(author: Author): Promise<Author | null>;
  delete(id: string): Promise<void>;
  getAll(): Promise<Author[]>;
  
}
