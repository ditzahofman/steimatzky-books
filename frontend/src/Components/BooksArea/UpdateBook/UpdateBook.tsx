import { Button, TextField } from "@mui/material";
import "./UpdateBook.css";
import BookModel from "../../../Models/BookModel";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import bookService from "../../../Services/BookService";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBook(): JSX.Element {
    const navigate = useNavigate();
    const params = useParams();
    const { register, handleSubmit, formState, setValue} = useForm<BookModel>()
    useEffect(() => {
        const id =+params.id
       bookService.getOneBook(id)
          .then(b => {
            setValue("bookId", b.bookId);
          })
          .catch(err => alert(err.message))
      }, [])

      async function send(book:BookModel){
        try {
             await bookService.updateBook(book)
             navigate("/home")
        
        } catch (err) {
            alert(err)
        }
            }
    return (
        <div className="UpdateBook">
			<form onSubmit={handleSubmit(send)}>
                <h2 className="h2-card">UpdateBook</h2>
            <TextField className="textFiled" id="outlined-basic" label="name" variant="outlined" {...register("bookName")} />
            <textarea className="textFiled" id="outlined-basic" placeholder="description"  {...register("summary")} />
                   
            <TextField className="textFiled"  id="outlined-basic"  label="pricePerChild" variant="outlined"  {...register("genreId")}/>
            <TextField className="textFiled"  id="outlined-basic" label="priceForAnAdult" variant="outlined"  {...register("unitsInStock")}/>
            <Button type="submit"  className="button">UPDATE</Button>
            </form>
        </div>
    );
}

export default UpdateBook;
