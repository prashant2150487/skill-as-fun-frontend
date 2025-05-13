import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";

const PlayQuizze = () => {
  const [quizzeData, setQuizzeData] = useState("");

  const questions = [
    {
      id: 1,
      question: "Which CSS property is used to set the text color?",
      options: ["text-color", "color", "font-color", "text-style"],
      correctAnswer: "color",
    },
    {
      id: 2,
      question: "Which property is used to change the background color?",
      options: ["background", "background-color", "bg-color", "color-background"],
      correctAnswer: "background-color",
    },
    {
      id: 3,
      question: "Which property is used to set the space between elements?",
      options: ["margin", "padding", "spacing", "gap"],
      correctAnswer: "margin",
    },
    {
      id: 4,
      question: "Which property is used to set the font of an element?",
      options: ["font-style", "font-family", "text-font", "font-type"],
      correctAnswer: "font-family",
    },
    {
      id: 5,
      question: "Which property is used to add space inside an element?",
      options: ["margin", "padding", "spacing", "inner-space"],
      correctAnswer: "padding",
    },
    {
      id: 6,
      question: "Which property is used to set the size of the font?",
      options: ["font-size", "text-size", "font-height", "text-height"],
      correctAnswer: "font-size",
    },
    {
      id: 7,
      question: "Which property is used to make text bold?",
      options: ["font-weight", "text-bold", "font-style", "text-style"],
      correctAnswer: "font-weight",
    },
  ];
  return (
    <div className="space-y-8">
      {questions.map((question) => (
        <Card key={question.id} className="shadow-md">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-xl font-semibold">
                Question {question.id}
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              {question.question}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup className="space-y-3">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={"flex items-center space-x-2 rounded-lg border p-4 transition-colors"
                  }
                >
                  <RadioGroupItem
                    value={option}
                    id={`q${question.id}-option-${index}`}
                  />
                  <Label
                    htmlFor={`q${question.id}-option-${index}`}
                    className="flex-1 cursor-pointer font-medium"
                  >
                    {option}
                  </Label>
                  
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlayQuizze;
