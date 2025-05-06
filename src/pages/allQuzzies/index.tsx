import { Button } from "@/components/ui/button";
import { Cross, Plus } from "lucide-react";
import DashboardLayout from "../dashboard";
import { useEffect, useState } from "react";
import axiosInstance from "@/api/axios";
import { Input } from "@/components/ui/input";
interface Quiz {
  _id: string;
  title: string;
  category: string;
  description: string;
}
const AllQuzzies = () => {
  const [allQuzzies, setAllQuzzies] = useState<Quiz[]>([]);
  const [quizzePopup, setQuizzePopup] = useState(false);
  const [allInputs, setAllInputs] = useState({
    title: "",
    description: "",
    category: "",
  });
  const fetchAllQuzzies = async () => {
    try {
      const response = await axiosInstance.get("quizzes/getAllQuizzes");
      console.log(response.data, "dgdfgfdgdf");
      setAllQuzzies(response?.data?.quizzes);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };
  useEffect(() => {
    fetchAllQuzzies();
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAllInputs((prev) => ({ ...prev, [name]: value }));
  };
  const createQuzie = async () => {
    try {
      const response = await axiosInstance.post(
        "quizzes/createQuiz",
        allInputs
      );
      setQuizzePopup(false);
      setAllInputs({
        title: "",
        description: "",
        category: "",
      });
      fetchAllQuzzies();
      console.log(response.data, "response");
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };
  const handleClick = () => {
    setQuizzePopup(!quizzePopup);
  };
  return (
    <>
      <DashboardLayout>
        <div className="flex min-h-screen bg-gray-50">
          <div className="w-80 border-r bg-white p-6">
            <h2 className="text-xl font-medium mb-4">Content</h2>
            <div className="flex flex-col gap-3">
              {allQuzzies.map((item: Quiz, index: number) => {
                return (
                  <div
                    key={index}
                    className="border flex flex-col gap-3 rounded-md"
                  >
                    <div className="p-3 flex items-start">
                      <span className="text-xs text-gray-500 mr-2">
                        {index + 1}.
                      </span>
                      <div className=" flex flex-col items-start ">
                        <span className="text-xs">{item?.title}</span>
                        <span className="text-xs">{item?.category}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              onClick={handleClick}
              variant="outline"
              className="w-full mt-4 justify-start text-gray-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Quiz
            </Button>
            {quizzePopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="w-full max-w-md px-6 py-5 bg-white rounded-2xl shadow-lg">
                  <div className="flex items-center justify-between ">
                    <div className="text-xl font-semibold text-[#101828] mb-4 cursor-pointer">
                      Create Quiz
                    </div>
                    <Cross onClick={() => setQuizzePopup(false)} />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Input
                      onChange={handleChange}
                      name="title"
                      value={allInputs.title}
                      type="text"
                      placeholder="Title"
                    />
                    <Input
                      onChange={handleChange}
                      name="description"
                      value={allInputs.description}
                      type="text"
                      placeholder="Description"
                    />
                    <Input
                      onChange={handleChange}
                      name="category"
                      value={allInputs.category}
                      type="text"
                      placeholder="Category"
                    />
                    <Button
                      onClick={createQuzie}
                      variant="outline"
                      className="w-full mt-4 justify-center bg-slate-700 text-white"
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AllQuzzies;
