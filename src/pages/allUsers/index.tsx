import DashboardLayout from "../dashboard";
import { useEffect, useState } from "react";
import { EllipsisVertical } from "lucide-react";
import axiosInstance from "@/api/axios";
import { Separator } from "@/components/ui/separator";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  childName?: string;
  status?: string;
  statusColor?: string;
  whatsUpNo?: string;
}
const AllUsers = () => {
  const [allData, setAllData] = useState<User[]>([]);
  const [activeRow, setActiveRow] = useState<string | null>(null); // Track the active row

  console.log(activeRow, "activeRow");
  console.log(allData, "allData");
  const userData = async () => {
    try {
      const response = await axiosInstance.get("auth/getAllUsers");
      setAllData(response.data?.users || []);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    
    userData();
  }, []);
  const handleClick = (id: string) => {
    setActiveRow(id); // Toggle the dropdown for the clicked row
  };
  const handleDelete = async (id: string) => {
    try {
      const response = await axiosInstance.delete(`auth/deleteUser/${id}`);
      // Optionally, you can update the state to remove the deleted user from the list
      userData(); // Fetch updated user data

      console.log(response.data, "response");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="relative overflow-x-auto py-4 px-1 sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Number
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allData.map((user) => (
              <tr
                key={user._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${user._id}`}
                      type="checkbox"
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded-sm"
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
                    {user?.childName
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase() || "NA"}
                  </div>
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {user?.childName || user?.name}
                    </div>
                    <div className="font-normal text-gray-500">
                      {user?.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{user?.role}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${user.statusColor} mr-2`}
                    ></div>
                    {user.whatsUpNo}
                  </div>
                </td>
                <td className="px-6 py-4 relative">
                  <EllipsisVertical
                    onClick={() => handleClick(user._id)}
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                  />
                  {activeRow === user._id && (
                    <div className="absolute top-10 border right-40 mt-2 w-[180px] flex flex-col items-start py-4 px-4 bg-white shadow-md gap-3 rounded=sm z-10">
                      <h2 className="text-sm text-gray-800 cursor-pointer hover:text-gray-900">
                        Edit
                      </h2>
                      <Separator className="w-full" />
                      <h4
                        className="font-normal text-gray-500 cursor-pointer hover:text-gray-700"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </h4>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default AllUsers;
