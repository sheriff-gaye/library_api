import { AuthorMapper } from "../../application/mappers/author-mappers";
import { Author } from "../../domain/entities/author-entity";
import { AuthorRepository } from "../../domain/repository/author-repository";
import { AuthorModel } from "../database/model/author-model";

export class AuthorRepositoryImpl implements AuthorRepository {

  private authorModel:typeof AuthorModel

  constructor(){
    this.authorModel=AuthorModel
  }

  async create(authorData: Author): Promise<Author> {
    const mappedAuthor=AuthorMapper.toDB(authorData);
    const createdAuthor = await this.authorModel.create(mappedAuthor);
    return AuthorMapper.toEntity(createdAuthor);
  }

  async findById(id: string): Promise<Author | null> {
    const author = await this.authorModel.findByPk(id);
    return author ? author.toJSON() as Author : null;
    
  }
  async update(author: Author): Promise<Author | null> {
    const existingAuthor = await this.authorModel.findByPk(author.id);
  
    if (!existingAuthor) throw new Error("Author Not Found");
  
    const mappedAuthor=AuthorMapper.toDB(author);
    const updateAuthor=await existingAuthor.update(mappedAuthor);
    return  AuthorMapper.toEntity(updateAuthor);
  
  }
  
  async delete(id: string): Promise<void> {
    await this.authorModel.destroy({
      where: { id },
    });

  }

  async getAll(): Promise<Author[]> {
    const authors = await this.authorModel.findAll();
    return authors.map((author)=>AuthorMapper.toEntity(author));
  }
  
}
