import { Author } from '../../../domain/entities/author-entity';
import { AuthorRepository } from '../../../domain/repository/author-repository';
import { AuthorMapper } from '../../mappers/author-mappers';
import { AuthorRequest } from './request';
import { AuthorResponse } from './response';

export class UpdateAuthorUseCase {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(request:AuthorRequest): Promise<AuthorResponse> {
    if (!request.id) throw new Error("Author ID is required for update");

    const existingAuthor = await this.authorRepository.findById(request.id);

    if (!existingAuthor) {
      throw new Error ("Author not Found");
    }

    const author=AuthorMapper.toEntity(request);
   return await this.authorRepository.update(author);

   
  }
}
