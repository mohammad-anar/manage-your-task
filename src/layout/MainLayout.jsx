import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../components/shared/Logo";
import NavbarLinks from "../components/home/Navbar/NavbarLinks";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const navigate = useNavigate();
  const user = true;
  const logOut = () => {
    console.log("log out");
  };
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-primary justify-between">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <Logo />
            <div className="flex-none hidden lg:block">
              <div className="menu menu-horizontal gap-5">
                {/* Navbar menu content here */}
                <NavbarLinks />
              </div>
            </div>
            <div className="dropdown dropdown-end text-base relative text-black font-medium flex items-center gap-1">
              <div
                tabIndex={0}
                role="button"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-primary underline"
                    : ""
                }
              >
                <p className="cursor-pointer">
                  <img
                    tabIndex={0}
                    role="button"
                    className="w-16 h-16 rounded-full p-2 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s"
                    alt=""
                  />
                </p>
                <div
                  tabIndex={0}
                  className="dropdown-content absolute z-[1] bg-white menu -mt-1 right-0 shadow rounded-0 p-4 w-40"
                >
                  <div className="flex items-center justify-center mb-6 flex-col">
                    <img
                      tabIndex={0}
                      role="button"
                      className="w-16 h-16 rounded-full p-2 "
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s"
                      alt=""
                    />
                    <p>anarul@gmail.com</p>
                  </div>
                  <h2
                    onClick={() => navigate("/dashboard")}
                    className="text-primary border-y  p-2 text-center font-bold duration-300 hover:rounded-full hover:bg-primary hover:text-white "
                  >
                    Dashboard
                  </h2>
                  {!user && (
                    <h2
                      onClick={() => navigate("/login")}
                      className="mt-3 hover:bg-red-400  p-2 text-center font-bold duration-300 rounded-full bg-primary text-white  "
                    >
                      Login/Sign Up
                    </h2>
                  )}
                  {user && (
                    <h2
                      onClick={() => logOut()}
                      className="mt-3 hover:bg-red-400  p-2 text-center font-bold duration-300 rounded-full bg-primary text-white "
                    >
                      Logout
                    </h2>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
          <Footer/>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
