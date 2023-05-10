import express, { Request, Response, NextFunction } from "express"
import bookLogic from "../5-logic/books-logic"
import BookModel from "../4-models/book-model"
const router = express.Router()

router.get("/books/genre", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const genre = await bookLogic.getAllGenre()
        response.json(genre)
    } catch (err) {
        next(err)
    }

})

router.get("/books", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const books = await bookLogic.getAllBooks()
        response.json(books)
    } catch (err) {
        next(err)
    }

})

router.get("/books/:genreId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.genreId
        const book = await bookLogic.getBookByGenre(id)
        response.json(book)
    } catch (err) {
        next(err)
    }
})

router.post("/books", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const newBook = new BookModel(request.body)
        const book = await bookLogic.sendBook(newBook)
        response.status(201).json(book)
    } catch (err) {
        next(err)
    }

})

router.delete("/books/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id
        await bookLogic.deleteBook(id)
        response.sendStatus(204).send("its deleted")
    } catch (err) {
        next(err)
    }

})

router.put("/books/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.bookId = +request.params.id
        const book = new BookModel(request.body)
        const updateBook = await bookLogic.updateBook(book)
        response.json(updateBook)
    } catch (err: any) {
        next(err)
    }

})



export default router