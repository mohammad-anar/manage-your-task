import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashobardLayout = () => {
    return (
        <div className="grid grid-cols-10 min-h-screen gap-6 bg-gray-200">
           <Sidebar/>
           <div className="bg-white p-2 col-span-8 lg:m-4 rounded-xl">
            <Outlet/>
           </div>
        </div>
    );
};

export default DashobardLayout;