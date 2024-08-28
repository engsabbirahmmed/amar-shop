import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/products',
                element: <Products/>,
                loader: ()=>fetch('https://dummyjson.com/products')
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
        ]
    }
])



export default myCreatedRoute;