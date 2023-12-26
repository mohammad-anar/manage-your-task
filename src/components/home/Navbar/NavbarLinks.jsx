import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <>
      <div className="text-base text-white font-medium">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action underline" : ""
          }
        >
          Home
        </NavLink>
      </div>
      {/* link 2  */}
      <div className="text-base text-white font-medium">
        <NavLink
          to="/tasks"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action underline" : ""
          }
        >
          Tasks
        </NavLink>
      </div>
      {/* link 3  */}
      <div className="text-base text-white font-medium">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action underline" : ""
          }
        >
          About
        </NavLink>
      </div>
      {/* link 4  */}
      <div className="text-base text-white font-medium">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-action underline" : ""
          }
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default NavbarLinks;
