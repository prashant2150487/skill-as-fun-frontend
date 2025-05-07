import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  Copy,
  Cross,
  Eye,
  HelpCircle,
  Plus,
  Trash2,
} from "lucide-react";

import DashboardLayout from "../dashboard";
import { useEffect, useState } from "react";
import axiosInstance from "@/api/axios";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";
import QuestionCard from "./questionCard";
import AddQuzziePopup from "./AddQuzziePopup";
interface Quiz {
  _id: string;
  title: string;
  category: string;
  description: string;
}
const AllQuzzies = () => {
  const [allQuzzies, setAllQuzzies] = useState<Quiz[]>([]);
  const [quizzePopup, setQuizzePopup] = useState(false);



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


  const handleClick = () => {
    setQuizzePopup(!quizzePopup);
  };
 

  const handleDeleteQuizze = async (quizID: string) => {
    try {
      const responce = await axiosInstance.delete(`quizzes/${quizID}`);
      fetchAllQuzzies();
      console.log(responce.data, "responce");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <DashboardLayout>
        <div className="flex min-h-screen bg-gray-50">
          <div className="w-80 border-r bg-white p-6">
            <h2 className="text-xl font-medium mb-4">Quzzies</h2>
            <div className="flex flex-col gap-3">
              {allQuzzies.map((item: Quiz, index: number) => {
                console.log(item, "item");
                return (
                  <div
                    key={index}
                    className="border flex flex-col gap-3 rounded-md"
                  >
                    <div className="p-3 flex items-start">
                      <span className="text-xs text-gray-500 mr-2">
                        {index + 1}.
                      </span>
                      <div className="flex items-center justify-between">
                        <div className=" flex flex-col items-start ">
                          <span className="text-xs">{item?.title}</span>
                          <span className="text-xs">{item?.category}</span>
                        </div>
                        <Trash2 onClick={() => handleDeleteQuizze(item.id)} />
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
            <AddQuzziePopup setQuizzePopup={setQuizzePopup}
            fetchAllQuzzies={fetchAllQuzzies}
            />
            )}
          </div>
          <div className="flex-1 p-6">
            <div className="max-w-3xl mx-auto">
              {/* Form Title */}
              <div className="mb-6">
                <Input
                  className="text-2xl font-medium border-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Type here"
                />
                <Input
                  className="text-sm text-gray-500 border-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="+ Add Description"
                />
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
              <QuestionCard/>
              <div className="flex justify-start  p-4">
                <Button
                  variant="outline"
                  
                  className="text-blue-500 gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add New Question
                </Button>
              </div>

            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default AllQuzzies;
