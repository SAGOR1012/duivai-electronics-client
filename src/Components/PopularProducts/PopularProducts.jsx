import { NavLink } from "react-router-dom";

const PopularProducts = () => {
    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold px-1 py-3 ">Popular Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="card w-full h-full shadow-xl">
                    <NavLink className="p-4">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-lg hover:scale-105 transition-all object-cover w-full h-full" />
                    </NavLink>
                    <h3 className="text-center text-gray-600 font-semibold">New Shows</h3>
                </div>
                <div className="card w-full h-full shadow-xl">
                    <NavLink className="p-4">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-lg hover:scale-105 transition-all object-cover w-full h-full" />
                    </NavLink>
                    <h3 className="text-center text-gray-600 font-semibold">New Shows</h3>
                </div>
                <div className="card w-full h-full shadow-xl">
                    <NavLink className="p-4">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-lg hover:scale-105 transition-all object-cover w-full h-full" />
                    </NavLink>
                    <h3 className="text-center text-gray-600 font-semibold">New Shows</h3>
                </div>
                <div className="card w-full h-full shadow-xl">
                    <NavLink className="p-4">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-lg hover:scale-105 transition-all object-cover w-full h-full" />
                    </NavLink>
                    <h3 className="text-center text-gray-600 font-semibold">New Shows</h3>
                </div>
            </div>

        </div >
    );
};

export default PopularProducts;
