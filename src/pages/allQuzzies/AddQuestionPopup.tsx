import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CircleHelp, Copy, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import axiosInstance from "@/api/axios";
import { useDispatch } from "react-redux";
import { setLoading } from "@/slices/loaderSlice";

type Props = {
  quizID: string;
  setShowQuestionPopup: (value: boolean) => void;
  fetchAllQuzzies: () => void;
};

const AddQuestionPopup: React.FC<Props> = ({
  quizID,
  setShowQuestionPopup,
  fetchAllQuzzies,
}) => {
  const [question, setQuestion] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [optionText, setOptionText] = useState("");
  const dispatch=useDispatch();

  const handleAddOption = () => {
    if (optionText.trim() !== "") {
      setOptions([...options, optionText.trim()]);
      setOptionText("");
    }
  };

  const handleDeleteOption = (indexToRemove: number) => {
    setOptions(options.filter((_, index) => index !== indexToRemove));
  };
  const handleAddQuestion = async (quizID: string) => {
    try {
        dispatch(setLoading(true))
      await axiosInstance.post(`quizzes/${quizID}/addQuestion`, {
        text: question,
        options: options,
        correctIndex: 0,
      });
      fetchAllQuzzies();
      setShowQuestionPopup(false);
    } catch (error) {
      console.log("error", error);
    }finally{
        dispatch(setLoading(false))
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-2">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <CircleHelp className="h-5 w-5 text-blue-500" />
              <span className="font-medium">1</span>
            </div>
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger className="w-[120px]">
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
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <Label className="text-sm text-gray-500 mb-1 block">
                Question
              </Label>
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question"
                className="mb-2"
              />
              <Label className="text-sm text-gray-500 mb-1 block">
                Description (optional)
              </Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Type here"
                className="resize-none"
              />
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Checkbox />
                <Label className="text-sm">Add Image or video</Label>
              </div>
            </div>

            <div className="grid gap-4">
              {options.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex flex-1 items-center gap-3 border border-gray-300 shadow-md rounded-md p-2">
                    <div className="flex items-center border border-gray-300 rounded-md p-1 px-3 shadow-lg">
                      <h3 className="text-base text-blue-500">
                        {String.fromCharCode(65 + index)}
                      </h3>
                    </div>
                    <h3>{item}</h3>
                  </div>
                  <X
                    onClick={() => handleDeleteOption(index)}
                    className="cursor-pointer text-black "
                  />
                </div>
              ))}

              <div className="flex flex-1 items-center gap-1 border border-gray-300 shadow-md rounded-md p-2">
                <div className="flex items-center border border-gray-300 rounded-md p-2 shadow-lg">
                  <div
                    onClick={handleAddOption}
                    className="cursor-pointer text-base text-blue-500"
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
                  className="border-0 shadow-none"
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end p-4 gap-x-3">
          <Button variant="outline" onClick={() => setShowQuestionPopup(false)}>
            Go Back
          </Button>
          <Button variant="outline" onClick={() => handleAddQuestion(quizID)}>
            Add Question
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddQuestionPopup;
