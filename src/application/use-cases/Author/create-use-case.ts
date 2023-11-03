import { Author } from '../../../domain/entities/author-entity';
import { AuthorRepository } from '../../../domain/repository/author-repository';
export class CreateAuthorUseCase {
  constructor(private authorRepository: AuthorRepository) {}


  async execute(firstName: string, lastName: string): Promise<Author> {
    const newAuthorData: Partial<Author> = {
      firstName,
      lastName,
    }; 
    return  await this.authorRepository.create(newAuthorData as Author);
   
  }
}
