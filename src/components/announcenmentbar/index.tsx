import axiosInstance from "@/api/axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Define announcement type based on API response
interface Announcement {
  _id: string;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  author?: string;
}
// Define API response type
interface AnnouncementApiResponse {
  message: string;
  announcements: Announcement[];
}
const Announcementbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [allAnnouncements, setAllAnnouncements] = useState<Announcement[]>([]);
  const fetchAnnouncements = async () => {
    try {
      const response = await axiosInstance.get<AnnouncementApiResponse>(
        "/announcement/active"
      );
      if (
        response.data &&
        Array.isArray(response.data.announcements)
      ) {
        setAllAnnouncements(response.data.announcements);
      } else {
        console.warn("Unexpected response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  if (!visible || allAnnouncements.length === 0) return null;

  return (
    <div className="w-full bg-yellow-100 text-yellow-900 px-4 py-3 flex items-center justify-between text-sm font-medium shadow-sm overflow-hidden">
      <div className="flex-1">
        <Carousel
          opts={{
            loop: true,
            align: "start",
            duration: 3000,
          }}
        >
          <CarouselContent className="w-full animate-scroll">
            {allAnnouncements.map((item) => (
              <CarouselItem key={item._id} className="px-1">
                <p className="truncate">
                  📢 <strong>{item.title}:</strong> {item.content}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 hover:text-yellow-600 transition-colors shrink-0"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Announcementbar;
