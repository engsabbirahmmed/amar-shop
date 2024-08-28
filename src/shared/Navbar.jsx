import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between shadow-xl items-center py-7 px-2">
            <h1 className="text-4xl font-bold">Amar shop</h1>
            <ul className="flex justify-between gap-5 text-xl font-medium">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;