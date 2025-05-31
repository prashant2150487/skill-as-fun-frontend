import axiosInstance from "@/api/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setLoading } from "@/slices/loaderSlice";
import { X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  setQuizzePopup: (value: boolean) => void;
  fetchAllQuzzies: () => void;
}
const AddQuzziePopup: React.FC<Props> = ({
  setQuizzePopup,
  fetchAllQuzzies,
}) => {
  const [allInputs, setAllInputs] = useState({
    title: "",
    description: "",
    category: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAllInputs({ ...allInputs, [name]: value });
  };
  const createQuzie = async () => {
    try {
      dispatch(setLoading(true));
      await axiosInstance.post("quizzes/createQuiz", allInputs);
      setQuizzePopup(false);
      setAllInputs({
        title: "",
        description: "",
        category: "",
      });
      fetchAllQuzzies();
    } catch (error) {
      console.error("Error creating quiz:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
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
    </>
  );
};

export default AddQuzziePopup;
