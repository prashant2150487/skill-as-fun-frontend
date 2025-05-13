import axiosInstance from "@/api/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Quizzes {
  title: string;
  description: string;
  category: string;
  id:number;
}
export default function Quizzes() {
  const [allQuzzies, setAllQuzzies] = useState<Quizzes[]>([]);
  const fetchAllQuzzies = async () => {
    try {
      const response = await axiosInstance.get("quizzes/getAllQuizzes");
      console.log(response.data, "Fetched quizzes");
      setAllQuzzies(response?.data?.quizzes || []);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };
  useEffect(() => {
    fetchAllQuzzies();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {allQuzzies.map((item, index) => (  
          <Link
          to={`/quizze/${item.id}`} 

            key={index}
            className="shadow-md border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
          >
            <div className="p-6 pb-2">
              <h2 className="text-2xl font-bold text-center">{item.title}</h2>
            </div>
            <div className="p-3">
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {item.description}
              </p>
            </div>
            <div className="p-3">
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {item.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
