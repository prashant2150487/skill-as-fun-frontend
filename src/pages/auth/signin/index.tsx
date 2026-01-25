import axiosInstance from "@/api/axios";
import SEO from "@/components/SEO/SEO";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setLoading } from "@/slices/loaderSlice";
import { setUser } from "@/slices/userSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Signin = () => {
  const navigate = useNavigate();
  const [fromData, setFromData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  return (
    <>
      <SEO
        title="Sign In - Skill as Fun | Access Your Learning Dashboard"
        description="Sign in to your Skill as Fun account to access gamified courses, quizzes, and track your learning progress."
        keywords="sign in, login, account access, learning dashboard"
        url="https://skill-as-fun.com/auth/signin"
      />

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromData({
      ...fromData,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newError = {
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;
    if (!fromData.email.trim()) {
      newError.email = "Email is required";
      isValid = false;
    }
    if (!fromData.password.trim()) {
      newError.password = "Password is required";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };
  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }
    try {
      // debugger
      dispatch(setLoading(true));
      const response = await axiosInstance.post("auth/login", {
        email: fromData.email,
        password: fromData.password,
      });
      dispatch(setUser(response.data));
      localStorage.setItem("Token", response.data?.token);
      toast("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
      //  toast("Event has been created", {
      //     description: "Sunday, December 03, 2023 at 9:00 AM",
      //     action: {
      //       label: "Undo",
      //       onClick: () => console.log("Undo"),
      //     },
      //   })
      toast("Error signing in. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Sign In your Account
          </CardTitle>
          <p className="text-sm text-gray-500">
            Join us and start your journey!
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={fromData.email}
                  onChange={handleChange}
                  placeholder=" Your Email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={fromData.password}
                  onChange={handleChange}
                  placeholder=" Enter Your Password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                {/* <GoogleLoginButton/> */}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <Button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Sign In
          </Button>
          <Button
            onClick={() => navigate(-1)}
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            GO BACK
          </Button>
          <Link
            to="/auth/signup"
            className=" w-fit ml-auto underline text-blue-600 font-semibold py-2 px-4 rounded-md transition duration-300 text-center"
          >
            Sign Up
          </Link>
        </CardFooter>
      </Card>
    </div>
    </>
  );
};
export default Signin;
