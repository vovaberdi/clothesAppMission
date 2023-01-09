import { Routes, Route, Navigate } from "react-router-dom";
import Set from "../../Pages/mySets/Set";
import Home from "../../Pages/Home/Home";
import ListPlaces from "../../Pages/ListPlaces/ListPlaces";
import Page404 from "../../Pages/Page404/Page404";
import "./Main.css";

function Main(): JSX.Element {
    
    const user = false;
    return (
        <div className="Main">
			<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                {/* <Route path="/AddVication" element={<Set />} /> */}
                <Route path="/ListPlaces" element={<ListPlaces />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Main;
