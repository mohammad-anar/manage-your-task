import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashobardLayout from "../layout/DashobardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateTask from "../components/Dashboard/CreateTask";
import TaskList from "../components/Dashboard/taskList/TaskList";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashobardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create-task",
        element: <CreateTask />,
      },{
        path: "tasks-list",
        element: <TaskList/>
      }
    ],
  },
]);
export default Routers;
