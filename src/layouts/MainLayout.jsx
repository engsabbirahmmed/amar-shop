import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div className="">
         <div className="max-w-screen-xl mx-auto px-2">
            <Navbar/>

            <div className="min-h-screen">
                <Outlet/>
            </div>
            <Footer/>
         </div>
        </div>
    );
};

export default MainLayout;