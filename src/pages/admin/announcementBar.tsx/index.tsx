import axiosInstance from "@/api/axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardLayout from "@/pages/dashboard";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";

const AdminAnnouncementBar = () => {
  const [announcement, setAnnouncement] = useState<
    {
      id: number;
      title: string;
      content: string;
      targetAudience: string;
      startDate: string;
      endDate: string;
      isActive: boolean;
    }[]
  >([]);
  const fetchAnnouncement = async () => {
    const response = await axiosInstance.get("/announcement/all");
    setAnnouncement(response.data?.announcements);
  };
  useEffect(() => {
    fetchAnnouncement();
  }, []);
  console.log(announcement);
  return (
    <DashboardLayout>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">Sr. No.</TableHead>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead className="w-[700px]">content</TableHead>
            <TableHead>targetAudience</TableHead>
            <TableHead className="">startDate</TableHead>
            <TableHead className="">endDate</TableHead>
            <TableHead className="">isActive</TableHead>
            <TableHead className="text">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {announcement.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell className="font-medium">{item.content}</TableCell>
              <TableCell className="font-medium">
                {item.targetAudience}
              </TableCell>
              <TableCell className="font-medium">{item.startDate}</TableCell>
              <TableCell className="font-medium">{item.endDate}</TableCell>
              <TableCell className="font-medium">
                {item.isActive ? "Yes" : "No"}
              </TableCell>
              <TableCell className="font-medium">
                <EllipsisVertical />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardLayout>
  );
};

export default AdminAnnouncementBar;
