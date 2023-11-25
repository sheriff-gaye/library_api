import { AuthorMapper } from "../../application/mappers/author-mappers";
import { Author } from "../../domain/entities/author-entity";
import { AuthorRepository } from "../../domain/repository/author-repository";
import { AuthorModel } from "../database/model/author-model";

export class AuthorRepositoryImpl implements AuthorRepository {
  async create(authorData: Author): Promise<Author> {
    const mappedAuthor=AuthorMapper.toDB(authorData);
    const createdAuthor = await AuthorModel.create(mappedAuthor);
    return AuthorMapper.toEntity(createdAuthor);
  }

  async findById(id: string): Promise<Author | null> {
    const author = await AuthorModel.findByPk(id);
    return author ? author.toJSON() as Author : null;
    
  }
  async update(author: Author): Promise<Author | null> {
    const existingAuthor = await AuthorModel.findByPk(author.id);
  
    if (!existingAuthor) throw new Error("Author Not Found");
  
    const mappedAuthor=AuthorMapper.toDB(author);
    const updateAuthor=await existingAuthor.update(mappedAuthor);
    return  AuthorMapper.toEntity(updateAuthor);
  
  }
  
  async delete(id: string): Promise<void> {
    await AuthorModel.destroy({
      where: { id },
    });

  }

  async getAll(): Promise<Author[]> {
    const authors = await AuthorModel.findAll();
    return authors.map((author)=>AuthorMapper.toEntity(author));
  }
  
}
