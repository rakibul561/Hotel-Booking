import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Fotter from "../component/Fotter";
import Home from "./Home";


const Main = () => {
    return (
        <div>
            
            <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
                <Outlet>
                </Outlet>
                <Home></Home>
            </div>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;