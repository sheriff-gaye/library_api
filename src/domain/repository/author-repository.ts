import { Author } from "../entities/author-entity";

export interface AuthorRepository {
  create(authorData: Partial<Author>): Promise<Author>;
  findById(id: number): Promise<Author | null>;
  update(author: Author): Promise<Author>;
  delete(id: number): Promise<void>;
  getAll(): Promise<Author[]>;
  
}
