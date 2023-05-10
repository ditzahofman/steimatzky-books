import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <hr></hr>
			<NavLink to={"/home"}>Home  |</NavLink>
            <NavLink to={"/gunre"}>Gunre  |</NavLink>
            <hr></hr>
        </div>
    );
}

export default Menu;
