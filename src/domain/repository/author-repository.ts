import { Author } from "../entities/Author";

export class AuthorRepository {
    async createAuthor(name: string): Promise<Author> {
        return Author.create({ name });
    }

    async getAllAuthor(): Promise<Author[]> {
        return Author.findAll();
    }


    async deleteAuthor(id: string): Promise<void> {
        await Author.destroy({
            where: { id },
        });
    }


}


