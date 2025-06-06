import axiosInstance from "@/api/axios";
import { setLoading } from "@/slices/loaderSlice";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
interface Props {
  setDeletePopup: (value: boolean) => void;
  fetchAllQuzzies: () => void;
  questionId?: string;
  quizId?: string;
}

const DeleteQuestionPopup: React.FC<Props> = ({
  setDeletePopup,
  fetchAllQuzzies,
  questionId,
  quizId,
}) => {
  const dispatch = useDispatch();
  const handleQuestionDelete = async () => {
    try {
      dispatch(setLoading(true));
      if (questionId) {
        const response = await axiosInstance.delete(
          `quizzes/${questionId}/deleteQuestion`
        );
        console.log(response);
      }
      if (quizId) {
        const response = await axiosInstance.delete(`quizzes/${quizId}`);
        console.log(response);
      }

      setDeletePopup(false);
      fetchAllQuzzies();
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error deleting question:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <button
              onClick={() => setDeletePopup(false)}
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <X />
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                onClick={() => handleQuestionDelete()}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={() => setDeletePopup(false)}
                data-modal-hide="popup-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteQuestionPopup;
