import { Author } from "../../../domain/entities/author-entity";

export type AuthorResponse=Promise<Author>| null | Promise<void>