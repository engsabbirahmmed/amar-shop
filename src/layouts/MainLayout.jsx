import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {

    const navigator = useNavigation();
    console.log(navigator);

    

    return (
        <div className="">
         <div className="max-w-screen-xl mx-auto px-2">
            <Navbar/>

{/* {
    navigator.state === 'loading' ? 'Loading......' : <div className="min-h-screen my-5">
    <Outlet/>
</div>
} */}

            <div className="min-h-screen my-5">
                <Outlet/>
            </div>
            <Footer/>
         </div>
        </div>
    );
};

export default MainLayout;