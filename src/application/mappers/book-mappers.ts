import { Books } from "../../domain/entities/book-entity";


export class BooksMapper{

    public static toDB(book:Books):any{
        return {
            id: book.id,
            title: book.title,
            description:book.description,
            copies:book.copies,
            publisher:book.publisher,
            publish_date:book.publish_date,
            authorId: book.authorId,
            categoryId:book.categoryId,
            createdAt:book.createdAt?.toISOString(),
            updatedAt:book.updatedAt?.toISOString(),
        }
    }

    public static toEntity(bookData:any):Books{
        return Books.CreateProperties({
            id: bookData.id,
            title: bookData.title,
            description:bookData.description,
            publisher:bookData.publisher,
            publish_date:bookData.publish_date,
            authorId:bookData.authorId,
            categoryId:bookData.categoryId,
            copies:bookData.copies,
            createdAt:bookData.createdAt,
            updatedAt:bookData.updatedAt


        })
    }
}