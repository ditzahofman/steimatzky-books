import joi from "joi"
class BookModel{
public bookId:number
public bookName:string
public nameOfWriter:string
public summary:string
public genreId:number
public price:number
public unitsInStock:number


public constructor(book:BookModel){
    this.bookId = book.bookId
    this.bookName =book. bookName
    this.nameOfWriter = book.nameOfWriter
    this.summary = book.summary
    this.genreId = book.genreId
    this. price = book. price
    this.unitsInStock = book.unitsInStock
  
}
public static validationSchema=joi.object({
    bookId:joi.number().optional().positive(),
    bookName:joi.string().required().min(3).max(20),
    nameOfWriter:joi.string().required().min(3).max(20),
    summary:joi.string().required().min(10).max(1000),
    genreId:joi.number().required().positive(),
    price:joi.number().required().positive(),
    unitsInStock:joi.number().required().positive(),
   
})
public validate():string{
    const result = BookModel.validationSchema.validate(this)
    return result.error?.message
}
}
export default BookModel