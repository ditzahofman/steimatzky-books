import BookList from "../../BooksArea/BookList/BookList";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
		<p>Intresting books!</p>
        <BookList/>
        </div>
    );
}

export default Home;
