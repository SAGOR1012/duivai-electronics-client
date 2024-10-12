import { Outlet } from "react-router-dom";
import Navbar1 from "../Pages/Navbar1/Navbar1";

const Main = () => {
    return (
        <div className=" ">

            <Navbar1></Navbar1>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;