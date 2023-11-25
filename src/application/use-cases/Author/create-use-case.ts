import { AuthorRepository } from '../../../domain/repository/author-repository';
import { AuthorMapper } from '../../mappers/author-mappers';
import { AuthorRequest } from './request';
import { AuthorResponse } from './response';


export class CreateAuthorUseCase {
  constructor(private authorRepository: AuthorRepository) {}


  async execute(request:AuthorRequest): Promise<AuthorResponse> {
    const author = AuthorMapper.toEntity(request) 
    return  await this.authorRepository.create(author);
   
  }
}
