import DashboardLayout from "../dashboard";
import { useEffect, useState } from "react";
import axiosInstance from "@/api/axios";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface DemoUser {
    _id: string;
    childName: string;
    guardianName: string;
    whatsAppNumber: string;
    email: string;
    bookingDate: string;
    childAge?: string;
    createdAt: string;
}

const DemoUsers = () => {
    const [demoData, setDemoData] = useState<DemoUser[]>([]);

    const fetchDemoData = async () => {
        try {
            // Endpoint typically returns { message: "...", data: [...] }
            const response = await axiosInstance.get("/demo"); // axiosInstance base is /api/, so this calls /api/demo
            // Based on user request, response structure is { message: ..., data: [...] }
            setDemoData(response.data?.data || []);
        } catch (error) {
            console.error("Error fetching demo users:", error);
        }
    };

    useEffect(() => {
        fetchDemoData();
    }, []);

    return (
        <DashboardLayout>
            <div className="relative overflow-x-auto py-4 px-1 sm:rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Demo Registrations</h2>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Child Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Guardian Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                WhatsApp Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Booking Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Child Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {demoData.map((user) => (
                            <tr
                                key={user._id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th
                                    scope="row"
                                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mr-3">
                                        {user?.childName?.charAt(0).toUpperCase() || "N"}
                                    </div>
                                    <div className="text-base font-semibold">{user?.childName || "N/A"}</div>
                                </th>
                                <td className="px-6 py-4">
                                    {user?.guardianName || "N/A"}
                                </td>
                                <td className="px-6 py-4">
                                    {user?.email}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        {user.whatsAppNumber}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="secondary" className="font-mono">
                                        {user.bookingDate ? format(new Date(user.bookingDate), 'PPpp') : "N/A"}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4">
                                    {user?.childAge || "N/A"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {demoData.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No demo registrations found.
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default DemoUsers;
