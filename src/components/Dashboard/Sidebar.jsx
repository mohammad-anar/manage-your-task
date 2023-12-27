import Logo from "../shared/Logo";
import SidebarLInks from "./SidebarLInks";
import { Link, NavLink } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import Searchbar from "../shared/Searchbar/searchbar";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-white flex flex-col justify-between lg:m-4 rounded-xl p-5 text-center">
      <div>
        <Logo color={"primary"} />
        <div className="my-6">
          <Searchbar />
        </div>
        <Link to="create-task">
        <button className="btn btn-md bg-action text-white duration-300 hover:bg-blue-300 ">
          <IoAddCircle size={25} />
          Create new
        </button>
        </Link>
        {/* links  */}
        <div className="text-left p-5 space-y-5 mt-6">
          <SidebarLInks />
        </div>
      </div>
      {/* link 1  */}
      <div className="text-base font-medium">
        <NavLink
          to="/help-center"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action" : "text-black"
          }
        >
          <span className="flex items-center gap-4">
            <IoSettingsSharp size={20} /> Setting
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
