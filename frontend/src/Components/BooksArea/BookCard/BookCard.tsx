import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";
import BookModel from "../../../Models/BookModel";
import "./BookCard.css";

interface BookProps{
    book:BookModel
}
function BookCard(props:BookProps): JSX.Element {
    return (
        <div className="BookCard">
           <Card className="card">
           <CardHeader>
			
            </CardHeader>
            <CardContent >
                <h2>{props.book.bookName}</h2>
                <p>Writer:{props.book.nameOfWriter}</p>
                <p>Genre:{props.book.genreName}</p>
                <p className="Summury">{props.book.summary}</p>
                <p>Price:{props.book.price}</p>
                <p>Units in stock:{props.book.unitsInStock}</p>
                <Button type="button">Delete</Button>
                </CardContent>
                
                
                
                </Card>
        </div>
    );
}

export default BookCard;
