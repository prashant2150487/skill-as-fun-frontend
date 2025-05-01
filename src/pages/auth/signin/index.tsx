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
import { setUser } from "@/slices/userSlice";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const dispatch=useDispatch();
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fromData);
    if (!validate()) {
      return;
    }
    try {
      const response = await axios.post(
        "https://skill-as-fun-back-end.vercel.app/api/auth/login",
        {
          email: fromData.email,
          password: fromData.password,
        }
      );
      console.log(response.data, "Login successful!");
      dispatch(setUser(response.data.user));
      toast("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Error signing in. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
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
          <form onSubmit={handleSubmit} className="space-y-4">
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
             
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
export default Signin;
