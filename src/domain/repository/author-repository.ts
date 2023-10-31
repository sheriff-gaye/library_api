import { Author } from "../entities/Author";
import { AuthorAttributes } from "../interfaces/Author";

export class AuthorRepository {
    async createAuthor(name: string): Promise<AuthorAttributes> {
        const author = await Author.create({name})
        return author.toJSON() as AuthorAttributes;
    }


    async getAllAuthor(): Promise<AuthorAttributes[]> {
        return Author.findAll();
    }

    async updateAuthor(id: string, name: string): Promise<AuthorAttributes | null> {
        await Author.update({ name }, {
            where: { id }
        });
        return Author.findByPk(id);
    }

    async deleteAuthor(id: string) {
        return Author.destroy({
            where: { id }
        });
    }
}
