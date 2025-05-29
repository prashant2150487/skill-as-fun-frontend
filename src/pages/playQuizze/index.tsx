import axiosInstance from "@/api/axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScorePopUp from "./ScorePopUp";
import { fireworkConfetti } from "@/utils/confetti";
interface Question {
  _id: string;
  quizId: string;
  text: string;
  options: string[];
  correctIndex: number;
}
interface SubmitResponse {
  message: string;
  score: {
    userId: string;
    quizId: string;
    score: number;
    takenAt: string;
  };
}

const PlayQuizze: React.FC = () => {
  const [questionsData, setQuestionsData] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showScore, setShowScore] = useState<boolean>(false);

  const { quizId } = useParams<{ quizId: string }>();
  const [submitResponse, setSubmitResponse] = useState<SubmitResponse>();

  const getAllQuestions = async () => {
    try {
      const response = await axiosInstance.get(
        `/quizzes/${quizId}/getQuestion`
      );
      setQuestionsData(response?.data?.questions || []);
    } catch (error) {
      console.error("Error while fetching questions from the database", error);
    }
  };

  useEffect(() => {
    if (quizId) {
      getAllQuestions();
    }
  }, [quizId]);

  const handleOptionChange = (questionId: string, selectedOption: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = async () => {
    try {
      const answers = Object.entries(selectedAnswers).map(
        ([questionId, selectedOption]) => {
          const question = questionsData.find((q) => q._id === questionId);
          const selectedIndex = question?.options.indexOf(selectedOption) ?? -1;

          return {
            questionId,
            selectedIndex,
          };
        }
      );

      const response= await axiosInstance.post(
        `/quizzes/${quizId}/submitAnswers`,
        {
          answers: answers,
        }
      );
      setSubmitResponse(response?.data);
      setIsSubmitted(true);
      setShowScore(true);

      // 🎉 Fire confetti when submission is successful
      fireworkConfetti();
    } catch (error) {
      console.error(
        "Error while submitting the quiz answers to the database",
        error
      );
      setShowScore(false);
    }
  };
    console.log(submitResponse,"res")


  return (
    <div className="space-y-8 px-4 py-5">
      {questionsData.map((question, index) => (
        <Card key={question._id} className="shadow-md">
          <CardHeader>
            <div className="flex justify-start items-center mb-2">
              <CardTitle className="text-xl font-semibold">
                Question {index + 1}
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              {question.text}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              className="space-y-3"
              value={selectedAnswers[question._id] || ""}
              onValueChange={(value) => handleOptionChange(question._id, value)}
            >
              {question.options.map((option, optIndex) => {
                const isSelected = selectedAnswers[question._id] === option;
                const isCorrect = optIndex === question.correctIndex;
                let borderColor = "border";

                if (isSubmitted) {
                  if (isSelected) {
                    borderColor = isCorrect
                      ? "border-green-500"
                      : "border-red-500";
                  } else if (isCorrect) {
                    borderColor = "border-green-500";
                  }
                }

                return (
                  <div
                    key={optIndex}
                    className={`flex items-center space-x-2 rounded-lg p-4 transition-colors ${borderColor}`}
                  >
                    <RadioGroupItem
                      value={option}
                      id={`q${question._id}-option-${optIndex}`}
                      disabled={isSubmitted}
                    />
                    <Label
                      htmlFor={`q${question._id}-option-${optIndex}`}
                      className="flex-1 cursor-pointer font-medium"
                    >
                      {option}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}

      {questionsData.length > 0 && (
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="ml-auto"
            onClick={handleSubmit}
            disabled={isSubmitted}
          >
            Submit
          </Button>
        </div>
      )}

      {showScore && <ScorePopUp setShowScore={setShowScore} score={submitResponse?.score?.score ?? 0}/>}
    </div>
  );
};

export default PlayQuizze;
