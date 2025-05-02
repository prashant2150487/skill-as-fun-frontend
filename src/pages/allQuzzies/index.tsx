import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DashboardLayout from "../dashboard";
import { useEffect, useState } from "react";
import axiosInstance from "@/api/axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface Quiz {
  _id: string;
  title: string;
  category: string;
  description: string;
}
const AllQuzzies = () => {
  const [allQuzzies, setAllQuzzies] = useState<Quiz[]>([]);
  const [quizzePopup, setQuizzePopup] = useState(false);
  const handleClick = () => {
    setQuizzePopup(!quizzePopup);
  };

  useEffect(() => {
    const fetchAllQuzzies = async () => {
      try {
        const response = await axiosInstance.get("quizzes/getAllQuizzes");
        console.log(response.data, "dgdfgfdgdf");
        setAllQuzzies(response?.data?.quizzes);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };
    fetchAllQuzzies();
  }, []);
  console.log(allQuzzies, "allQuzzies");
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
              Add New Section
            </Button>
            {quizzePopup && (
              <div className="flex shadow-md items-start justify-start px-5 py-5 ">
                <div className="flex flex-col gap-5 ">
                  <div className="text-lg font-semibold text-[#101828]">
                    Create Quize
                  </div>
                  <div className="flex  flex-col gap-2">
                    <Input type="Title" placeholder="Title" />
                    <Input type="Descripiton" placeholder="Descripiton" />
                    <Input type="category" placeholder="Category" />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Main Content */}
          {/* <div className="flex-1 p-6">
          <div className="max-w-3xl mx-auto">
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

            {questions.map((question, index) => (
              <Card key={question.id} className="mb-6">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                      <CircleHelp className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">
                        Question {question.id}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue={question.type}>
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

                  <div className="p-4">
                    <div className="mb-4">
                      <Label className="text-sm text-gray-500 mb-1 block">
                        Question
                      </Label>
                      <Input
                        placeholder="type here"
                        className="mb-2"
                        value={question.text}
                        onChange={(e) => {
                          const newQuestions = [...questions];
                          newQuestions[index].text = e.target.value;
                          setQuestions(newQuestions);
                        }}
                      />
                      <Label className="text-sm text-gray-500 mb-1 block">
                        Description (optional)
                      </Label>
                      <Textarea
                        placeholder="type here"
                        className="resize-none"
                        value={question.description}
                        onChange={(e) => {
                          const newQuestions = [...questions];
                          newQuestions[index].description = e.target.value;
                          setQuestions(newQuestions);
                        }}
                      />
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`media-${question.id}`}
                          checked={question.hasMedia}
                          onCheckedChange={(checked) => {
                            const newQuestions = [...questions];
                            newQuestions[index].hasMedia = !!checked;
                            setQuestions(newQuestions);
                          }}
                        />
                        <Label
                          htmlFor={`media-${question.id}`}
                          className="text-sm"
                        >
                          Add Image or video
                        </Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="border rounded-md p-4">
                        <RadioGroup defaultValue="yes">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="yes"
                              id={`yes-${question.id}`}
                            />
                            <Label htmlFor={`yes-${question.id}`}>Yes</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="border rounded-md p-4">
                        <RadioGroup defaultValue="no">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="no"
                              id={`no-${question.id}`}
                            />
                            <Label htmlFor={`no-${question.id}`}>No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center border-t p-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-500 gap-2"
                      onClick={addNewQuestion}
                    >
                      <Plus className="h-4 w-4" />
                      Add New Question
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

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
        </div> */}
        </div>
      </DashboardLayout>
    </>
  );
};

export default AllQuzzies;
