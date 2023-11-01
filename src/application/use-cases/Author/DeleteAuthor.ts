import { AuthorRepository } from '../../../domain/repository/author-repository';
// DeleteAuthor.ts

export class DeleteAuthor {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(id: string): Promise<boolean> {
    return this.authorRepository.delete(id);
  }
}
