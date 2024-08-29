import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between shadow-xl items-center py-7 px-2">
            <h1 className="text-4xl font-bold">Amar shop</h1>
            <ul className="flex justify-between gap-5 text-xl font-medium">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "px-3 py-2" : isActive ? "bg-green-600 text-white rounded px-3 py-2" : "px-3 py-2"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "px-3 py-2" : isActive ? "bg-green-600 text-white rounded px-3 py-2" : "px-3 py-2"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive, isPending }) =>
                        isPending ? "px-3 py-2" : isActive ? "bg-green-600 text-white rounded px-3 py-2" : "px-3 py-2"
                    }
                >
                    Products
                </NavLink>
                <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "px-3 py-2" : isActive ? "bg-green-600 text-white rounded px-3 py-2" : "px-3 py-2"
                    }
                >
                    Dashboard
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;