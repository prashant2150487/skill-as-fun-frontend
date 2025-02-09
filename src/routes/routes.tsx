import Signup from "@/components/Signup";
import About from "@/pages/about/About";
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
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
