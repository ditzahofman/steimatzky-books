import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import BookModel from "../4-models/book-model";
import { ResourceNotFoundError, ValidationError } from "../4-models/error-models";

async function getAllGenre() {
    const sql = `
        SELECT * FROM genre `

    const genre = await dal.execute(sql);
    return genre;
}

async function getAllBooks(): Promise<BookModel[]> {
    const sql = `
        SELECT b.* , g.genreName 
        From books AS b JOIN genre AS g
        on b.genreId = g.genreId `

    const books = await dal.execute(sql);
    return books;
}
async function getBookById(id: number): Promise<BookModel> {

    const sql = `
        SELECT * From books
        WHERE books.bookId=?`

    const books = await dal.execute(sql, [id]);
    const book = books[0]
    if (!book) {
        throw new ResourceNotFoundError(id)
    }
    return books;
}

async function getBookByGenre(genreId: number): Promise<BookModel> {

    const sql = `
        SELECT b.* , g.genreName 
        From books AS b JOIN genre AS g
        on b.genreId = g.genreId 
        WHERE b.genreId = ?`

    const books = await dal.execute(sql, [genreId]);
    
    return books;
}

async function sendBook(book: BookModel): Promise<BookModel> {
    const errors = book.validate()
    if (errors) {
        throw new ValidationError(errors)
    }
    const sql = `
        INSERT INTO books VALUES( DEFAULT,?,?,?,?,?,?)`

    const info: OkPacket = await dal.execute(sql,
        [book.bookName,
        book.nameOfWriter,
        book.summary,
        book.genreId,
        book.price,
        book.unitsInStock
       ])
    book.bookId = info.insertId
    return book
}

async function deleteBook(id: number): Promise<void> {


    const sql = `
         DELETE FROM books
         WHERE bookId = ?`

    const info: OkPacket = await dal.execute(sql, [id])
    if (info.affectedRows === 0) {
        throw new ResourceNotFoundError(id)
    }

}

async function updateBook(book: BookModel): Promise<BookModel> {
    const errors = book.validate()
    if (errors) {
        throw new ValidationError(errors)
    }
    const sql = `
         UPDATE  books SET
            bookName=?,
            nameOfWriter=?,
            summary=?,
            genreId=?,
            price=?,
            unitsInStock=?
         WHERE books.bookId=?`

    const info: OkPacket = await dal.execute(sql,
        [book.bookName,
        book.nameOfWriter,
        book.summary,
        book.genreId,
        book.price,
        book.unitsInStock,
        book.bookId])

    if (info.affectedRows === 0) {
        throw new ResourceNotFoundError(book.bookId)
    }
    return book
}


export default {
    getAllGenre,
    getAllBooks,
    getBookByGenre,
    sendBook,
    deleteBook,
    updateBook
};
