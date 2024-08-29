import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex gap-5">
            <div className="w-[25%] bg-gray-300 p-5 rounded">
                <ul className="text-xl font-medium">
                    <li><Link to={`/dashboard`}>Dashboard</Link></li>
                    <li className="my-4"><Link to={`/dashboard/profile`}>Profile</Link></li>
                    <li><Link to={`/dashboard/edit-profile`}>Edit Profile</Link></li>
                </ul>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;