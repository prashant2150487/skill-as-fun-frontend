import About from "@/pages/about/About";
import Courses from "@/pages/Courses";
import Dashboard from "@/pages/dashboard";
import Home from "@/pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
