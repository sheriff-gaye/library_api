import { Author } from '../../../domain/entities/author-entity';
import { AuthorRepository } from '../../../domain/repository/author-repository';
import { AuthorModel } from '../model/author-model';

export class AuthorRepositoryImpl implements AuthorRepository {
  async create(authorData: Partial<Author>): Promise<Author> {
    const createdAuthor = await AuthorModel.create(authorData);
    return new Author(createdAuthor.id, createdAuthor.firstName, createdAuthor.lastName);
  }

  async findById(id: string): Promise<Author | null> {
    const author = await AuthorModel.findByPk(id);
    if (!author) return null;
    return new Author(author.id, author.firstName, author.lastName);
  }

  async update(author: Author): Promise<Author> {
    const existingAuthor = await AuthorModel.findByPk(author.id);

    if (!existingAuthor) {
      throw new Error('Author not found');
    }

    existingAuthor.firstName = author.firstName;
    existingAuthor.lastName = author.lastName;

    await existingAuthor.save();

    return new Author(existingAuthor.id, existingAuthor.firstName, existingAuthor.lastName);
  }

  async delete(id: string): Promise<void> {
    const deletedRowsCount = await AuthorModel.destroy({
      where: { id },
    });

    if (deletedRowsCount === 0) {
      throw new Error('Author not found');
    }
  }

  async getAll(): Promise<Author[]> {
    const authors = await AuthorModel.findAll();
    return authors.map(author => new Author(author.id, author.firstName, author.lastName));
  }
}
