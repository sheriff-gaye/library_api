import { Books } from "../../../domain/entities/book-entity";

export type BookResponse=Promise <Books> | null| Promise<void>