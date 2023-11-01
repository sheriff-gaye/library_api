// CreateAuthor.ts
import { Author } from '../../../domain/entities/Author';
import { AuthorRepository } from '../../../domain/repository/author-repository';

export class CreateAuthor {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(name: string): Promise<Author> {
    const author = new Author('', name);
    return this.authorRepository.create(author);
  }
}
