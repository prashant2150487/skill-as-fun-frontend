import DefaultLayout from "@/components/layouts/DefaultLayout";
import About from "@/pages/about/About";
import AllUsers from "@/pages/allUsers";
import Signin from "@/pages/auth/signin";
import SignupPage from "@/pages/auth/signup";
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
    path: "dashboard/all-users",
    element: <AllUsers />,
  },
  {
    path: "/auth/signup",

    element: <SignupPage />,
  },
  {
    path: "/auth/signin",
    element: <Signin />,
  },
  {
    path: "/course/:courseId",
    element: (
      <DefaultLayout>
        <Courses />
      </DefaultLayout>
    ),
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
