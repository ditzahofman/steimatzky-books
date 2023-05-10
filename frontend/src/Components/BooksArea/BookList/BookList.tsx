import { useEffect, useState } from "react";
import "./BookList.css";
import bookService from "../../../Services/BookService";
import BookModel from "../../../Models/BookModel";
import BookCard from "../BookCard/BookCard";
import GunreModel from "../../../Models/GunreModel";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

function BookList(): JSX.Element {
    const [books , setBooks] = useState<BookModel[]>([])
    const[genre , setGenre]= useState<GunreModel[]>([])
   
    useEffect(()=>{

    bookService.getAllGenre()
    .then(g=>setGenre(g))
    .catch(err=>alert(err))
   },[])

   async function showGifts(args: SelectChangeEvent) { 
    const value = +args.target.value;
   bookService.getBooksByGenre(value)
        .then(b => setBooks(b))
        .catch(err => alert(err.message));
}

    return (
        <><FormControl sx={{ m: 1, minWidth: 260 }}>
            <InputLabel id="site-area-label" className="SelectBox">Select Site Area</InputLabel>
            <Select
                labelId="site-area-label"
                label="Select Site Area"
                className="SelectBox"
                onChange={showGifts}
            >
                {genre.map(g => <MenuItem key={g.genreId} value={g.genreId}>
                    {g.genreName}
                </MenuItem>
                )}
            </Select>
        </FormControl><div className="BookList">
                {books.map(b => <BookCard key={b.bookId} book={b} />)}
            </div></>
    );
}

export default BookList;


