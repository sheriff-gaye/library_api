import { Author } from "../../../domain/entities/author-entity";
import { AuthorRepository } from "../../../domain/repository/author-repository";
import { AuthorModel } from "../model/author-model";

export class AuthorRepositoryImpl implements AuthorRepository {
  async create(authorData: Partial<Author>): Promise<Author> {
    const createdAuthor = await AuthorModel.create(authorData);
    return createdAuthor.toJSON() as Author;
  }

  async findById(id: string): Promise<Author | null> {
    const author = await AuthorModel.findByPk(id);
    return author ? author.toJSON() as Author : null;
    
  }
  async update(author: Author): Promise<Author | null> {
    const existingAuthor = await AuthorModel.findByPk(author.id);
  
    if (!existingAuthor) {
      return null
    }  
    await existingAuthor.update(author);

    return  await AuthorModel.findByPk(author.id) as Author;
  
  }
  
  
  async delete(id: string): Promise<void> {
    await AuthorModel.destroy({
      where: { id },
    });

  }

  async getAll(): Promise<Author[]> {
    const authors = await AuthorModel.findAll();
    return authors;
  }
  
}
