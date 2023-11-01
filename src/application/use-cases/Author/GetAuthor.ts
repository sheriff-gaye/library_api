// GetAuthor.ts
import { Author } from '../../../domain/entities/Author';
import { AuthorRepository } from '../../../domain/repository/author-repository';

export class GetAuthor {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(id: string): Promise<Author | null> {
    return this.authorRepository.getById(id);
  }
}
