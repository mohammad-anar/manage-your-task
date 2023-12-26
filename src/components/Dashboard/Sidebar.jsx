import { NavLink } from "react-router-dom";
import Logo from "../shared/Logo";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-white lg:m-4 rounded-xl p-5">
        <Logo color={'primary'}/>
        {/* links  */}
        <div>
        <div className="text-base text-white font-medium">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action underline" : ""
          }
        >
          Dashboard
        </NavLink>
      </div>
        </div>
    </div>
  );
};

export default Sidebar;
