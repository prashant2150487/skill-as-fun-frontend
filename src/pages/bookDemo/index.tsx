import axiosInstance from "@/api/axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setLoading } from "@/slices/loaderSlice";
import { Brain, Check, User, Video } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const BookMyDemo = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    studentClass: "",
  });
  const [errors, setErrors] = useState({
    parentName: "",
    phone: "",
    studentClass: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleClassChange = (value: string) => {
    setFormData({ ...formData, studentClass: value });
    setErrors({ ...errors, studentClass: "" });
  };

  const validate = () => {
    const newErrors = {
      parentName: "",
      phone: "",
      studentClass: "",
    };
    let isValid = true;

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent's Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
      isValid = false;
    }

    if (!formData.studentClass) {
      newErrors.studentClass = "Please select a class";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      guardianName: formData.parentName,
      whatsAppNumber: formData.phone,
      studentClass: formData.studentClass,
      // Default/Hidden fields to satisfy potential backend requirements
      childName: "",
      email: "",
      bookingDate: new Date().toISOString().split("T")[0], // Sending today's date
      childAge: "",
    };
    dispatch(setLoading(true));
    try {
      const res = await axiosInstance.post("/demo", payload);
      toast.success(res.data?.message || "Demo booked successfully!");
      setFormData({
        parentName: "",
        phone: "",
        studentClass: "",
      });
    } catch (error) {
      console.error("Error booking demo:", error);
      toast.error("Error booking demo. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
          Free Python Demo Class <br className="hidden md:block" />
          for Class 6 to Graduation
        </h1>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-lg">
          Live interactive class by expert mentors. No payment required.
        </p>
        <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>50+ students trained</span>
          </div>
          <div className="hidden sm:block text-gray-300">|</div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>3 successful batches</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-1 md:px-4 pb-12">
        <Card className="max-w-xl mx-auto shadow-none border-none border-gray-100 bg-white ">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="parentName"
                  className="font-semibold text-gray-700"
                >
                  Parent's Name
                </Label>
                <Input
                  id="parentName"
                  name="parentName"
                  placeholder="Enter your name"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={
                    errors.parentName ? "border-red-500 bg-white" : "bg-white"
                  }
                />
                {errors.parentName && (
                  <p className="text-sm text-red-500">{errors.parentName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-semibold text-gray-700">
                  Phone Number (WhatsApp)
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter WhatsApp number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className={
                    errors.phone ? "border-red-500 bg-white" : "bg-white"
                  }
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="studentClass"
                  className="font-semibold text-gray-700"
                >
                  Student Class
                </Label>
                <Select
                  onValueChange={handleClassChange}
                  value={formData.studentClass}
                >
                  <SelectTrigger
                    className={
                      errors.studentClass
                        ? "border-red-500 bg-white"
                        : "bg-white"
                    }
                  >
                    <SelectValue placeholder="Select Student Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Class 6">Class 6</SelectItem>
                    <SelectItem value="Class 7">Class 7</SelectItem>
                    <SelectItem value="Class 8">Class 8</SelectItem>
                    <SelectItem value="Class 9">Class 9</SelectItem>
                    <SelectItem value="Class 10">Class 10</SelectItem>
                    <SelectItem value="Class 11">Class 11</SelectItem>
                    <SelectItem value="Class 12">Class 12</SelectItem>
                    <SelectItem value="Graduation">Graduation</SelectItem>
                  </SelectContent>
                </Select>
                {errors.studentClass && (
                  <p className="text-sm text-red-500">{errors.studentClass}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#2E31A6] hover:bg-[#25288a] text-white font-bold py-6 text-lg mt-2 shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                Book Free Demo Class Now
              </Button>
              <p className="text-center text-xs text-gray-500 mt-2">
                No spam. We only call to schedule the demo.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="bg-[#F8FAFC] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#1E293B] mb-10">
            Why Parents Choose SkillasFun
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 rounded-lg shrink-0">
                <Video className="w-6 h-6 text-[#2E31A6]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Live Classes
                </h3>
                <p className="text-sm text-gray-600">
                  Real-time interaction with mentors and peers.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-yellow-50 rounded-lg shrink-0">
                <User className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Expert Mentors
                </h3>
                <p className="text-sm text-gray-600">
                  Learn from industry professionals.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-pink-50 rounded-lg shrink-0">
                <Brain className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Practical Learning
                </h3>
                <p className="text-sm text-gray-600">
                  Real projects and hands-on experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-[#1E293B] mb-10">
            How the Free Demo Works
          </h2>
          <div className="space-y-8 relative">
            {/* Connecting Line (Optional - can be added with absolute positioning if needed, keeping simple for now) */}

            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-[#2E31A6] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Fill the form
                </h3>
                <p className="text-gray-500 text-sm">
                  Enter your details to register.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-[#2E31A6] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  We call you within 24 hours
                </h3>
                <p className="text-gray-500 text-sm">To confirm your slot.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-[#2E31A6] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Attend the live demo class
                </h3>
                <p className="text-gray-500 text-sm">
                  Experience the learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMyDemo;
