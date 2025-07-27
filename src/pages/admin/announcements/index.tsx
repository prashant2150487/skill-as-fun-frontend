import DashboardLayout from "@/pages/dashboard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axiosInstance from "@/api/axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ]
const Announcements = () => {
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const fetchAnnouncements = async () => {
    try {
      const responce = await axiosInstance.get("/announcement/all");
      toast("Announcements fetched successfully!");
      console.log(responce.data, "red");
      setAllAnnouncements(responce.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };
  useEffect(() => {
    fetchAnnouncements();
  }, []);
  console.log(allAnnouncements, "gdfgdfg");
  return (
    <DashboardLayout>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>content</TableHead>
            <TableHead className="text-right">startDate</TableHead>
            <TableHead>endDate</TableHead>
            <TableHead>IsActive</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAnnouncements.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.content}</TableCell>
              <TableCell className="text-right">{item.startDate}</TableCell>
              <TableCell className="text-right">{item.endDate}</TableCell>
              <TableCell className="text-right text-black">
                {item.isActive ? "Active" : "NotActive"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardLayout>
  );
};

export default Announcements;
