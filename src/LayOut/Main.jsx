import { Outlet } from "react-router-dom";
import Navbar1 from "../Pages/Navbar1/Navbar1";
import Navbar2 from "../Pages/Navbar2/Navbar2";

const Main = () => {
    return (
        <div className=" ">

            <Navbar1></Navbar1>
            { <Navbar2></Navbar2> }
            <Outlet></Outlet>
        </div>
    );
};

export default Main;