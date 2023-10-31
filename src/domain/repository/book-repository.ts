import Book  from "../entities/Book"

export interface BookRepository {
  findById(id: number): Promise<Book | null>;
  findAll(): Promise<Book[]>;
  create(book: Book): Promise<Book>;
  update(book: Book): Promise<Book>;
  delete(id: number): Promise<void>;
}
