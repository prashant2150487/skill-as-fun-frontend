import { Button } from "@/components/ui/button";
import { Eye, HelpCircle, Plus, Trash2 } from "lucide-react";

import DashboardLayout from "../dashboard";
import { useEffect, useState } from "react";
import axiosInstance from "@/api/axios";

import AddQuzziePopup from "./AddQuzziePopup";
import QuestionCard from "./QuestionCard";
import AddQuestionPopup from "./AddQuestionPopup";
import { useDispatch } from "react-redux";
import { setLoading } from "@/slices/loaderSlice";
import DeleteQuestionPopup from "./DeleteQuestionPopup";

interface Quiz {
  id: string;
  title: string;
  category: string;
  description: string;
  questions: Question[];
}
type Question = {
  text: string;
  options: string[];
  correctIndex: number;
  _id: string;
};
const AllQuzzies = () => {
  const [allQuzzies, setAllQuzzies] = useState<Quiz[]>([]);
  const [quizzePopup, setQuizzePopup] = useState<boolean>(false);
  const [selectedQuiz, setSelectedQuiz] = useState<number>(0);
  const [showQuestionPopup, setShowQuestionPopup] = useState<boolean>(false);
  const [deleteQuizPopup, setDeleteQuizPopup] = useState<boolean>(false);
  const dispatch = useDispatch();
  const fetchAllQuzzies = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.get("quizzes/getAllQuizzes");
      setAllQuzzies(response?.data?.quizzes);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    fetchAllQuzzies();
  }, []);
  const handleClick = () => {
    setQuizzePopup(!quizzePopup);
  };
  const handleDeleteQuizze = async () => {
    setDeleteQuizPopup(true);
    // try {
    //   dispatch(setLoading(true));
    //   await axiosInstance.delete(`quizzes/${quizID}`);
    //   fetchAllQuzzies();
    // } catch (error) {
    //   console.log(error, "error");
    // } finally {
    //   dispatch(setLoading(false));
    // }
  };

  return (
    <>
      <DashboardLayout>
        <div className="flex min-h-screen bg-gray-50">
          <div className="w-80 border-r bg-white p-6">
            <h2 className="text-xl font-medium mb-4">Quizzes</h2>
            <div className="flex flex-col gap-3">
              {allQuzzies.map((item: Quiz, index: number) => {
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedQuiz(index)}
                    className={`border flex items-center justify-between  gap-3 rounded-md cursor-pointer + ${
                      allQuzzies?.length > 0 && index === selectedQuiz
                        ? "border-blue-300"
                        : ""
                    } `}
                  >
                    <div className="p-3 flex items-start">
                      <span className="text-xs text-gray-500 mr-2">
                        {index + 1}.
                      </span>
                      <div className="flex items-center justify-between">
                        <div className=" flex flex-col items-start ">
                          <span className="text-xs font-semibold">
                            {item?.title}
                          </span>
                          <span className="text-xs">{item?.category}</span>
                        </div>
                      </div>
                    </div>
                    <Trash2
                      className="mr-2"
                      onClick={() => handleDeleteQuizze()}
                    />
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
              <AddQuzziePopup
                setQuizzePopup={setQuizzePopup}
                fetchAllQuzzies={fetchAllQuzzies}
              />
            )}
            {deleteQuizPopup && (
              <DeleteQuestionPopup
                setDeletePopup={setDeleteQuizPopup}
                fetchAllQuzzies={fetchAllQuzzies}
                quizId={allQuzzies[selectedQuiz]?.id}
              />
            )}
          </div>
          <div className="flex-1 p-6">
            <div className="max-w-3xl mx-auto">
              {/* Form Title */}
              <div className="">
                <p className="text-xl font-bold border-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                  {allQuzzies[selectedQuiz]?.title}
                </p>
                <p className="text-sm text-gray-500 border-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                  {allQuzzies[selectedQuiz]?.category}
                </p>
              </div>
              {/* Help and Preview */}

              <div className="flex justify-end mb-4 gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Help!
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Preview
                </Button>
              </div>
              {allQuzzies[selectedQuiz]?.questions.map((item, index) => {
                return (
                  <QuestionCard
                    fetchAllQuzzies={fetchAllQuzzies}
                    key={index}
                    question={item}
                    index={index}
                  />
                );
              })}

              <div className="flex justify-start  p-4">
                <Button
                  // onClick={() => handleQuestion()}
                  onClick={() => setShowQuestionPopup(true)}
                  variant="outline"
                  className="text-blue-500 gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add New Question
                </Button>
              </div>
              {showQuestionPopup && (
                <AddQuestionPopup
                  quizID={allQuzzies[selectedQuiz]?.id}
                  setShowQuestionPopup={setShowQuestionPopup}
                  fetchAllQuzzies={fetchAllQuzzies}
                />
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default AllQuzzies;
