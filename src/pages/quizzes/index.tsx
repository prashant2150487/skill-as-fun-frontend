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
    <div className="min-h-screen p-10">
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4">
        {allQuzzies.map((item, index) => (  
          <Link
          to={`/quiz/${item.id}`} 

            key={index}
            className="shadow-md border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden p-4"
          >
            <div className="pb-2">
              <h2 className="text-2xl font-bold">{item.title}</h2>
            </div>
            <div className="">
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
            <div className="">
              <p className="text-gray-600 dark:text-gray-300 ">
                {item.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
