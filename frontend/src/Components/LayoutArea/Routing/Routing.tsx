import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import BookList from "../../BooksArea/BookList/BookList";
import UpdateBook from "../../BooksArea/UpdateBook/UpdateBook";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/gunre"  element={<BookList/>}/>
                <Route path="/update"  element={<UpdateBook/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
