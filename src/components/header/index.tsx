import { ArrowUpRight, Menu } from "lucide-react";
import { FC } from "react";
import logo from "../../assets/logoMobiile.svg";
import desktopLogo from "../../assets/logoDesktop.png"
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="bg-white py-1 md:py-2 border-gray-200 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" className="flex items-center">
            <img src={desktopLogo} alt="logo" className="hidden md:flex" />
            <img src={logo} alt="logo" className="size-14 md:size-20 md:hidden" />
          </a>
          <div className="hidden  md:flex items-center gap-x-4 md:gap-x-14">
            <a href="/about" className="text-black text-xl pointer-events-none">
              About
            </a>
            <a href="/prog" className="text-black text-xl pointer-events-none">
              Programs
            </a>
            <button
              disabled
              className="bg-[#2E31A6] px-5 py-3 rounded-3xl flex gap-1 shadow-sm text-white "
            >
              Register Now!
              <ArrowUpRight />
            </button>
            <Button className="px-6" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
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
                Program
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
  );
};

export default Header;
