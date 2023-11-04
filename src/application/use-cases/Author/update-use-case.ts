import { Author } from '../../../domain/entities/author-entity';
import { AuthorRepository } from '../../../domain/repository/author-repository';

export class UpdateAuthorUseCase {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(id: string, firstName: string, lastName: string): Promise<Author | null> {
    
    const existingAuthor = await this.authorRepository.findById(id);

    if (!existingAuthor) {
      return null; 
    }

    existingAuthor.firstName = firstName;
    existingAuthor.lastName= lastName;

   return await this.authorRepository.update(existingAuthor as Author);

   
  }
}
