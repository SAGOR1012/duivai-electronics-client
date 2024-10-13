import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { IoSearchCircle } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


/* Nav items */
const navItems = (
    < >
        <li className=''>
            <NavLink
                to="/shop"
                className={ ({ isActive }) =>
                    isActive ? "bg-themeColor rounded-full text-white" : "" }
            >
                Shop
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/aboutus"
                className={ ({ isActive }) =>
                    isActive ? "bg-themeColor rounded-full text-white" : ""
                }
            >
                About us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/ordertracking"
                className={ ({ isActive }) =>
                    isActive ? "bg-themeColor rounded-full text-white" : ""
                }
            >
                Order Tracking
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/termsconditions"
                className={ ({ isActive }) =>
                    isActive ? "bg-themeColor rounded-full text-white " : ""
                }
            >
                Terms & Conditions
            </NavLink>
        </li>



    </>
);
const Navbar2 = () => {
    return (
        <div className='bg-themeColor2 py-2 px-5 lg:px-48   '>
            {/* All Menu section  */ }
            <div className='hidden lg:flex justify-between'>
                <div className='flex gap-2'>
                    <button className='flex gap-2 items-center py-1 pl-2 pr-4 rounded-full bg-white text-neutral '>
                        <i className='text-white '>
                            <FiMenu className='bg-themeColor hidden lg:flex w-6 lg:w-8 lg:h-8 p-2 rounded-full' />
                        </i>
                        <h4 className='font-semibold text-xs'> All Categories</h4>
                    </button>
                    <div className=" ">
                        <ul className="menu menu-horizontal px-1 font-semibold text-sm ">
                            { navItems }
                        </ul>
                    </div>
                </div>

                {/* social media & booking curt*/ }
                <div className=' hidden lg:flex justify-between border lg:w-[20%]'>
                    {/* social media  */ }
                    <div className='  flex gap-2  '>
                        <a href=""><i className='text-white  '>< FaWhatsapp className='bg-green-500 w-6 md:w-10 h-6 md:h-10 p-1 md:p-2 rounded-full hover:scale-105' /></i></a>
                        <a href=""><i className='text-white'><FaFacebook className='bg-blue-500 w-6 md:w-10 h-6 md:h-10 p-1 md:p-2 rounded-full hover:scale-105' /></i></a>
                        <a href=""><i className='text-white'><FaYoutube className='bg-red-500 w-6 md:w-10 h-6 md:h-10 p-1 md:p-2 rounded-full hover:scale-105' /></i></a>
                    </div>
                    {/* Booking curt */ }
                    <div className='flex gap-3'>
                        <a href=""><i className='text-black'><AiOutlineUser className='bg-white w-6 md:w-10 h-6 md:h-10 p-1 md:p-2 rounded-full hover:scale-105' /></i></a>
                        <a href=""><i className='text-black'><MdOutlineFavoriteBorder className='bg-white w-6 md:w-10 h-6 md:h-10 p-1 md:p-2 rounded-full hover:scale-105' /></i></a>
                        <a href=""><i className='text-white'><FiShoppingCart className='bg-themeColor w-6 md:w-10 h-6 md:h-10 p-1 md:p-2 rounded-full hover:scale-105' /></i></a>
                        <div className='flex gap-1 items-center text-black text-xs'><span>0.00</span> <i><FaBangladeshiTakaSign /></i></div>
                    </div>
                </div>

            </div>
            {/* search box */ }
            <div className=' flex lg:hidden '>
                <input
                    type='text'
                    placeholder='Search for products'
                    className='py-2 px-3  rounded-full w-full bg-white border'
                />
                <i className='relative -ml-12 text-5xl text-themeColor hover:text-blue-500 cursor-pointer'>
                    <IoSearchCircle />
                </i>
            </div>
        </div>
    );
};

export default Navbar2;
