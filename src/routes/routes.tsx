import DefaultLayout from "@/components/layouts/DefaultLayout";
import About from "@/pages/about/About";
import AdminAnnouncementBar from "@/pages/admin/announcementBar.tsx";
import AllQuzzies from "@/pages/allQuzzies";
import AllUsers from "@/pages/allUsers";
import Signin from "@/pages/auth/signin";
import SignupPage from "@/pages/auth/signup";
import Courses from "@/pages/Courses";
import Home from "@/pages/home";
import PlayQuizze from "@/pages/playQuizze";
import Quizzes from "@/pages/quizzes";
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
    path: "/quizzes",
    element: (
      <DefaultLayout>
        <Quizzes />
      </DefaultLayout>
    ),
  },
  {
    path: "/quiz/:quizId",
    element: (
      <DefaultLayout>
        <PlayQuizze />
      </DefaultLayout>
    ),
  },
  {
    path: "dashboard/all-users",
    element: <AllUsers />,
  },
  {
    path: "dashboard/all-quizzes",
    element: <AllQuzzies />,
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
  {
    path: "/dashboard/announcement-bar",
    element: <AdminAnnouncementBar />,
  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
