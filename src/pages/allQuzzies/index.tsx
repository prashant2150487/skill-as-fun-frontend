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
  const [allOptions, setAllOptions] = useState([]);
  const [optionText, setOptionText] = useState("");
  console.log(optionText, "sdfdf", allOptions, "allOptions");
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
    setAllInputs({ ...allInputs, [name]: value });
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
  const handleAddOption = () => {
    setAllOptions([...allOptions, optionText]);
    setOptionText("");
  };
  const handleDeleteOption=(index)=>{
    const updatedOptions = allOptions.filter((_, i) => i !== index);
    setAllOptions(updatedOptions);
  }
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
                    <X
                      className="cursor-pointer"
                      onClick={() => setQuizzePopup(false)}
                    />
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

              {/* Questions */}

              <Card className="mb-6">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                      <CircleHelp className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">1 </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes/No">Yes/No</SelectItem>
                          <SelectItem value="Multiple Choice">
                            Multiple Choice
                          </SelectItem>
                          <SelectItem value="Text">Text</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="p-4">
                    <div className="mb-4">
                      <Label className="text-sm text-gray-500 mb-1 block">
                        Question
                      </Label>
                      <Input placeholder="type here" className="mb-2" />
                      <Label className="text-sm text-gray-500 mb-1 block">
                        Description (optional)
                      </Label>
                      <Textarea
                        placeholder="type here"
                        className="resize-none"
                      />
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <Checkbox />
                        <Label className="text-sm">Add Image or video</Label>
                      </div>
                    </div>

                    {/* Yes/No Options */}
                    <div className="grid  gap-4">
                      {allOptions.map((item:string, index:number) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between gap-2"
                          >
                            <div className="flex flex-1 items-center gap-3 border border-gray-300 shadow-md rounded-md p-2">
                              <div className="flex items-center border border-gray-300 rounded-md p-1 px-3  shadow-lg">
                                <h3 className="text-base text-blue-500">{
                                  String.fromCharCode(65 + index)
                                  
                                  }</h3>
                              </div>
                              <h3>{item}</h3>
                            </div>
                            <X 
                          onClick={()=>handleDeleteOption(index)}
                            
                            />
                          </div>
                        );
                      })}

                      <div className="flex flex-1 items-center gap-1 border border-gray-300 shadow-md rounded-md p-2">
                        <div className="flex items-center border border-gray-300 rounded-md p-2 shadow-lg">
                          <div
                            onClick={handleAddOption}
                            className=" cursor-pointer text-base text-blue-500"
                          >
                            <Plus className="h-4 w-4" />
                          </div>
                        </div>
                        <Input
                          onChange={(e) => setOptionText(e.target.value)}
                          value={optionText}
                          type="text"
                          name="option"
                          placeholder="Type here"
                          className=" border-0 shadow-0"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  {/* Question Footer */}
                  <div className="flex justify-start border-t p-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-500 gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add New Question
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Controls */}
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="icon">
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Trash2 className="h-4 w-4" />
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
