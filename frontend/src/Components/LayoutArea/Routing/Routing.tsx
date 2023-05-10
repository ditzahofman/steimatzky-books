import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/gunre" />
            </Routes>
        </div>
    );
}

export default Routing;
