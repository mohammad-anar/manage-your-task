import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { MdHistory } from "react-icons/md";

const SidebarLInks = () => {
  return (
    <>
      {/* link 1  */}
      <div className="text-base font-medium">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action" : "text-black"
          }
        >
          <span className="flex items-center gap-4">
            <MdDashboard size={20} /> Dashboard
          </span>
        </NavLink>
      </div>
      {/* link 1  */}
      <div className="text-base font-medium">
        <NavLink
          to="updatetask"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action" : "text-black"
          }
        >
          <span className="flex items-center gap-4">
            <MdOutlineSystemUpdateAlt  size={20} />Update task
          </span>
        </NavLink>
      </div>
      {/* link 1  */}
      <div className="text-base font-medium">
        <NavLink
          to="tasks-list"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action" : "text-black"
          }
        >
          <span className="flex items-center gap-4">
            <FaTasks size={20} /> Task List
          </span>
        </NavLink>
      </div>
      {/* link 1  */}
      <div className="text-base font-medium">
        <NavLink
          to="history"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action" : "text-black"
          }
        >
          <span className="flex items-center gap-4">
            <MdHistory size={20} /> History
          </span>
        </NavLink>
      </div>
      {/* link 1  */}
      <div className="text-base font-medium">
        <NavLink
          to="help-center"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action" : "text-black"
          }
        >
          <span className="flex items-center gap-4">
            <TbHelpHexagonFilled size={20} /> Help Center
          </span>
        </NavLink>
      </div>
    </>
  );
};

export default SidebarLInks;
