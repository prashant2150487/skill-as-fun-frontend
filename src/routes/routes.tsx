import DefaultLayout from "@/components/layouts/DefaultLayout";
import About from "@/pages/about/About";
import AdminAnnouncementBar from "@/pages/admin/announcementBar.tsx";
import AllQuzzies from "@/pages/allQuzzies";
import AllUsers from "@/pages/allUsers";
import Signin from "@/pages/auth/signin";
import SignupPage from "@/pages/auth/signup";
import Courses from "@/pages/Courses";
import Home from "@/pages/home";
// import PlayQuizze from "@/pages/playQuizze";
import { QuizPage } from "@/pages/quizPage";
import { QuizDifficultyPage } from "@/pages/quizDifficultyPage";
import { QuizGameLocal } from "@/pages/quizGameLocal";
import BookMyDemo from "@/pages/bookDemo";
import DemoUsers from "@/pages/demoUsers";
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
        <QuizPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/quiz/:quizId",
    element: (
      <DefaultLayout>
        <QuizDifficultyPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/quiz/:quizId/:difficultyId",
    element: <QuizGameLocal />,
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
    path: "dashboard/demo-users",
    element: <DemoUsers />,
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
    path: "dashboard/announcement-bar",
    element: <AdminAnnouncementBar />,
  },
  {
    path: "/book-demo",
    element: (
      <DefaultLayout>
        <BookMyDemo />
      </DefaultLayout>
    ),
  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
