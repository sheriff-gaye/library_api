import { Author } from "../entities/Author";

export class AuthorRepository {
    async createAuthor(name: string): Promise<Author> {
        return Author.create({ name });
    }

    async getAllAuthor(): Promise<Author[]> {
        return Author.findAll();
    }

    async updateAuthor(id: string, name: string): Promise<number> {
        const [affectedRowCount] = await Author.update({ name }, {
          where: { id },
        });
      
        if (affectedRowCount === 0) {
          throw new Error('Author not found');
        }
      
        return affectedRowCount;
      }
      


      async deleteAuthor(id: string): Promise<number> {
        const deletedRowCount = await Author.destroy({
          where: { id },
        });
      
        if (deletedRowCount === 0) {
          throw new Error('Author not found');
        }
      
        return deletedRowCount;
      }
      


}


