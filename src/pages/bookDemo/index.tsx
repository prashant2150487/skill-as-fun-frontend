import axiosInstance from "@/api/axios";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setLoading } from "@/slices/loaderSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const BookMyDemo = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "",
        preferredDate: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "",
        preferredDate: "",
    });
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        const newErrors = {
            name: "",
            email: "",
            phone: "",
            childName: "",
            childAge: "",
            preferredDate: "",
        };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
            isValid = false;
        } else if (formData.phone.length < 10) {
            newErrors.phone = "Phone number must be at least 10 digits";
            isValid = false;
        }

        if (!formData.preferredDate) {
            newErrors.preferredDate = "Preferred date is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const payload = {
            childName: formData.childName,
            guardianName: formData.name,
            whatsAppNumber: formData.phone,
            email: formData.email,
            bookingDate: formData.preferredDate,
            childAge: formData.childAge
        };
        dispatch(setLoading(true));
        try {
            const res=await axiosInstance.post("/api/demo", payload);

            toast.success(res.data?.message || "Demo booked successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                childName: "",
                childAge: "",
                preferredDate: "",
            });
        } catch (error) {
            console.error("Error booking demo:", error);
            toast.error("Error booking demo. Please try again.");
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="container mx-auto py-10 px-4 min-h-[70vh]">
            <Card className="max-w-2xl mx-auto shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-gray-800">
                        Book Your Free Demo Class
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 mt-2">
                        Experience the joy of learning with our expert tutors.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Parent's Name <span className="text-red-500">*</span></Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? "border-red-500" : ""}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">{errors.name}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? "border-red-500" : ""}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={errors.phone ? "border-red-500" : ""}
                                />
                                {errors.phone && (
                                    <p className="text-sm text-red-500">{errors.phone}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="preferredDate">Preferred Date <span className="text-red-500">*</span></Label>
                                <Input
                                    id="preferredDate"
                                    name="preferredDate"
                                    type="date"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    className={errors.preferredDate ? "border-red-500" : ""}
                                />
                                {errors.preferredDate && (
                                    <p className="text-sm text-red-500">{errors.preferredDate}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="childName">Child's Name (Optional)</Label>
                                <Input
                                    id="childName"
                                    name="childName"
                                    placeholder="Enter child's name"
                                    value={formData.childName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="childAge">Child's Age (Optional)</Label>
                                <Input
                                    id="childAge"
                                    name="childAge"
                                    type="number"
                                    placeholder="Enter child's age"
                                    value={formData.childAge}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#2E31A6] hover:bg-[#1a1c6b] text-white text-lg py-6 mt-6 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            Book My Free Demo
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default BookMyDemo;
