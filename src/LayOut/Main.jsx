import { Outlet } from "react-router-dom";
import Navbar1 from "../Pages/Navbar1/Navbar1";
import Navbar2 from "../Pages/Navbar2/Navbar2";

const Main = () => {
    return (
        <div className=" ">

            <Navbar1></Navbar1>
            { <Navbar2></Navbar2> }
            <div className="px-4 md:px-10 lg:px-40">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;