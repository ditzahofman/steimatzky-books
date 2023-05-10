import axios from "axios"
import BookModel from "../Models/BookModel"
import config from "../Utils/Config"
import GunreModel from "../Models/GunreModel"

class BookServiceModel {

    public async getAllBooks(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(config.bookUrl)
        const books = response.data
        return books

    }

    public async getBooksByGenre(genreId: number): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(config.bookUrl + genreId)
        const books = response.data
        return books

    }

    public async getAllGenre(): Promise<GunreModel[]> {
        const response = await axios.get<GunreModel[]>(config.genreUrl)
        const genre = response.data
        return genre

    }

    public async addNewBook(book: BookModel): Promise<BookModel> {
        const response = await axios.post(config.bookUrl, book)
        const addedBook = response.data
        return addedBook
    }

    public async deleteBook(id: number): Promise<void> {
        await axios.delete(config.bookUrl + id)

    }

    public async updateBook(book: BookModel): Promise<void> {
        const response = await axios.put(config.bookUrl, book)
        const updateBook = response.data
        return updateBook

    }

    public async getOneBook(id: number): Promise<BookModel> {

        const response = await axios.get<BookModel>(config.bookUrl + id);

        const book = response.data;
        return book

    }
}


const bookService = new BookServiceModel()
export default bookService