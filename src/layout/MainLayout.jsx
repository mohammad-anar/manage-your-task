import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2 className="text-xl">Navbar</h2>
      <Outlet />
      <h2 className="text-xl">Footer</h2>
    </div>
  );
};

export default MainLayout;
