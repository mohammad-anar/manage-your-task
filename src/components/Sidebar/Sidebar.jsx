import NavbarLinks from "../home/Navbar/NavbarLinks";
import Logo from "../shared/Logo";
import Searchbar from "../shared/Searchbar/searchbar";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu p-4 w-80 min-h-full bg-primary">
        <Logo/>
        <div className="my-4">
        <Searchbar/>
        </div>
        <NavbarLinks/>
      </div>
    </div>
  );
};

export default Sidebar;
