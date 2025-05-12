import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CircleHelp, Copy, Plus, Trash2, X } from "lucide-react";
import React, { useState } from "react";

<<<<<<< HEAD
const QuestionCard = ({question}) => {
=======
const QuestionCard = ({question,index}) => {
>>>>>>> 46bf19e583dd7cae5a10897bd19808891ae34dd1
  const [allOptions, setAllOptions] = useState([]);
  const [optionText, setOptionText] = useState("");

  const handleAddOption = () => {
    setAllOptions([...allOptions, optionText]);
    setOptionText("");
  };

  const handleDeleteOption = (index: number) => {
    const updatedOptions = allOptions.filter((_, i) => i !== index);
    setAllOptions(updatedOptions);
  };

  return (
    <>
      <Card className="mb-6">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <CircleHelp className="h-5 w-5 text-blue-500" />
              <span className="font-medium">{index+1} </span>
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
              <Input placeholder={question?.text} className="mb-2" />
              <Label className="text-sm text-gray-500 mb-1 block">
                Description (optional)
              </Label>
              <Textarea placeholder="type here" className="resize-none" />
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Checkbox />
                <Label className="text-sm">Add Image or video</Label>
              </div>
            </div>

            <div className="grid  gap-4">
              {question?.options.map((item: string, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex flex-1 items-center gap-3 border border-gray-300 shadow-md rounded-md p-2">
                      <div className="flex items-center border border-gray-300 rounded-md p-1 px-3  shadow-lg">
                        <h3 className="text-base text-blue-500">
                          {String.fromCharCode(65 + index)}
                        </h3>
                      </div>
                      <h3>{item}</h3>
                    </div>
                    <X onClick={() => handleDeleteOption(index)} />
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
        </CardContent>
      </Card>
    </>
  );
};

export default QuestionCard;
