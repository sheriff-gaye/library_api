import { Author } from "../../domain/entities/author-entity";

export class AuthorMapper {

    public static toDB(author:Author):any{
        return {
            id: author.id,
            firstName: author.firstName,
            lastName: author.lastName,
            createdAt:author.createdAt?.toISOString(),
            updatedAt:author.updatedAt?.toISOString()
        };

    }

    public static toEntity(authorData:any):Author{
        return Author.CreateProperties({
            id: authorData.id,
            firstName: authorData.firstName,
            lastName: authorData.lastName,
            createdAt: authorData.createdAt,
            updatedAt: authorData.updatedAt
        });
    }
}