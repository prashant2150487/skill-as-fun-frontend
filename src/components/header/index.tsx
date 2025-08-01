import { ArrowUpRight, Menu } from "lucide-react";
import { FC } from "react";
import logo from "../../assets/logoMobiile.svg";
import desktopLogo from "../../assets/logoDesktop.png";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Announcementbar from "../announcenmentbar";
const Header: FC = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.user
  );
  return (
    <>
      <Announcementbar />
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <nav className="bg-white py-1 md:py-2 border-gray-200 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="/" className="flex items-center">
              <img src={desktopLogo} alt="logo" className="hidden md:flex" />
              <img
                src={logo}
                alt="logo"
                className="size-14 md:size-20 md:hidden"
              />
            </a>
            <div
              className={`hidden md:flex items-center gap-x-4 md:gap-x-14 cursor-pointer`}
            >
              <a
                href="/"
                className={` text-xl +${
                  location.pathname === "/"
                    ? "text-blue-900 font-semibold"
                    : "text-black"
                }`}
              >
                {" "}
                Home
              </a>

              <a
                href="/about"
                className={` text-xl +${
                  location.pathname === "/about"
                    ? "text-blue-900 font-semibold"
                    : "text-black"
                }`}
              >
                About
              </a>
              {/* <a
              href="/courses"
              className={`text-black text-xl +${
                location.pathname === "/courses"
                  ? "text-blue-900 font-semibold"
                  : "text-black"
              }`}
              
            >
              Courses
            </a> */}
              <a href="/quizzes" className="text-black text-xl">
                Quizzes
              </a>
              <a
                href="/courses"
                className="text-black text-xl pointer-events-none"
              ></a>
              {!isAuthenticated ? (
                <Link
                  to="/auth/signin"
                  className="bg-[#2E31A6] px-5 py-3 rounded-3xl flex gap-1 shadow-sm text-white"
                >
                  <span>Signin</span>
                  <ArrowUpRight />
                </Link>
              ) : user?.role === "admin" ? (
                <Link
                  to="/dashboard/all-users"
                  className="bg-[#2E31A6] px-5 py-3 rounded-3xl flex gap-1 shadow-sm text-white"
                >
                  <span>Dashboard</span>
                </Link>
              ) : null}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="md:hidden">
                  <Menu size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-4">
                <DropdownMenuLabel className="font-normal">
                  About
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-normal">
                  Our Courses
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-normal">
                  <Button variant="secondary">Register Now!</Button>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
