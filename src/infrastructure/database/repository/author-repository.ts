import { AuthorRepository } from "../../../domain/repository/author-repository";
import { Author } from '../../../domain/entities/author-entity';
import { AuthorModel } from "../model/author-model";

export class AuthorRepositoryImpl implements AuthorRepository {
  update(author: Author): Promise<Author> {
    throw new Error("Method not implemented.");
  }
  
  async create(authorData:any) {
    const createdAuthor = await AuthorModel.create(authorData);
    return createdAuthor as unknown as Author;
  }

  async findById(id: number): Promise<Author | null> {
    const author = await AuthorModel.findByPk(id);
    return author ? author.toJSON() as unknown as Author : null;
  }


  async delete(id: number): Promise<void> {
    const deletedRowsCount = await AuthorModel.destroy({
      where: { id },
    });

    if (deletedRowsCount === 0) {
      throw new Error('Author not found');
    }
  }

  async getAll(): Promise<Author[]> {
    const authors = await AuthorModel.findAll();
    return authors.map((author) => author.toJSON() as unknown as Author);
  }
}
