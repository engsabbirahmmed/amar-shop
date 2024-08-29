import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

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
                loader: ()=>fetch(`https://dummyjson.com/products`)
            }, {
                path: '/products/:id',
                element: <Product/>,
                // loader: ({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
                // loader: (object)=>console.log(object.params.id)
            },
            {
                path: '/dashboard',
                element: <DashboardLayout/>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard/>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile/>
                    },
                    {
                        path: '/dashboard/edit-profile',
                        element: <EditProfile/>
                    },
                ]
            },
        ]
    }
])



export default myCreatedRoute;