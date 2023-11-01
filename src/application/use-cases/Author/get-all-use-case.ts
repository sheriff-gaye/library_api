import { AuthorRepository } from "../../../domain/repository/author-repository";
import { Author } from '../../../domain/entities/author-entity';

export class GetAllAuthorsUseCase {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(): Promise<Author[]> {
    const authors = await this.authorRepository.getAll();
    return authors;
  }
}
