import axiosInstance from "@/api/axios";
import { Button } from "@/components/ui/button";
import { setLoading } from "@/slices/loaderSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
interface Quizzes {
  title: string;
  description: string;
  category: string;
  id: number;
}
export default function Quizzes() {
  const [allQuzzies, setAllQuzzies] = useState<Quizzes[]>([]);
  const dispatch = useDispatch();
  const fetchAllQuzzies = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.get("quizzes/getAllQuizzes");

      setAllQuzzies(response?.data?.quizzes || []);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    fetchAllQuzzies();
  }, []);
  return (
    <div className="min-h-screen py-10 max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allQuzzies.map((item, index) => (
          <Link
            to={`/quiz/${item.id}`}
            key={index}
            className="shadow-md border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden p-4 w-7xl"
          >
            <div className="">
              <h2 className="text-xl font-bold">{item.title}</h2>
            </div>
            <div className="">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </div>
            <div className="">
              <p className="text-gray-600 dark:text-gray-300 ">
                {item.category}
              </p>
            </div>
            <Button variant="outline" className="mt-4">
              View Challenge
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
