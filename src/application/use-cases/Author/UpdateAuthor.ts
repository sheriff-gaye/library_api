// UpdateAuthor.ts
import { Author } from '../../../domain/entities/Author';
import { AuthorRepository } from '../../../domain/repository/author-repository';

export class UpdateAuthor {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(id: string, name: string): Promise<Author | null> {
    const author = await this.authorRepository.getById(id);

    if (!author) {
      return null;
    }

    author.name = name;
    return this.authorRepository.update(author);
  }
}
