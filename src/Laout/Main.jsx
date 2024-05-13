import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Fotter from "../component/Fotter";




const Main = () => {
    return (
        <div>
            
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
               
            </div>
            <div className="mt-8">
                <Fotter></Fotter>
        </div>
        </div>
    );
};

export default Main;