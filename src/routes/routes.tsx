import DefaultLayout from "@/components/layouts/DefaultLayout";
import About from "@/pages/about/About";
import AllQuzzies from "@/pages/allQuzzies";
import AllUsers from "@/pages/allUsers";
import Signin from "@/pages/auth/signin";
import SignupPage from "@/pages/auth/signup";
import Courses from "@/pages/Courses";
import Home from "@/pages/home";
import QuzziesQuestions from "@/pages/quzziesQuestions";
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
    path:"/quzzies",
    element:<QuzziesQuestions/>,
  },
  {
    path: "dashboard/all-users",
    element: <AllUsers />,
  },
  {
    path: "dashboard/all-quizzes",
    element: <AllQuzzies/>,
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
