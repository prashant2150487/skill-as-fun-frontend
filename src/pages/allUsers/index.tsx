import DashboardLayout from "../dashboard";
import { useEffect, useState } from "react";
import { Edit, EllipsisVertical, Trash } from "lucide-react";
import axiosInstance from "@/api/axios";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [activeRow] = useState<string | null>(null); // Track the active row

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
  // const handleClick = (id: string) => {
  //   setActiveRow(id);
  // };
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
                User Type
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
                  <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                      <EllipsisVertical className="cursor-pointer text-gray-500 hover:text-gray-700" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-40 rounded-lg shadow-md bg-white"
                      align="end"
                      sideOffset={4}
                    >
                      <DropdownMenuItem
                        className="cursor-pointer text-gray-800 hover:text-gray-900 flex items-center"
                        onClick={() => console.log("Edit user:", user._id)}
                      >
                        <Edit /> Edit
                      </DropdownMenuItem>
                      <Separator className="my-1" />
                      <DropdownMenuItem
                        className="cursor-pointer text-red-600 hover:text-red-700 flex items-center"
                        onClick={() => handleDelete(user._id)}
                      >
                        <Trash /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
