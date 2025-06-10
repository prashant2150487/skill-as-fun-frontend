import { X } from "lucide-react";

interface Props {
  setShowScore: (value: boolean) => void;
  score: number;
  totalQuestions: number;
}

const ScorePopUp: React.FC<Props> = ({ setShowScore , score , totalQuestions}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden -top-8">
      <div className="relative p-4 w-full max-w-md">
        {/* <!-- Modal content --> */}
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <button
            type="button"
            onClick={() => setShowScore(false)}
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <X  />
            <span className="sr-only">Close modal</span>
          </button>
          <h2 className="text-xl font-bold mb-4">
            Congratulation Your Score is :{" "}
          </h2>
          <p className="text-lg text-green-600 font-semibold">{score} / {totalQuestions}</p>
        </div>
      </div>
    </div>
  );
};

export default ScorePopUp;
