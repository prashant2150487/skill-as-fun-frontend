import { useState } from 'react';
import { ChevronRight, RotateCcw, Home } from 'lucide-react';
import { QuizCategory } from '../../../src/constants/quizzes';

interface QuizGameProps {
  quiz: QuizCategory;
  onBack: () => void;
  title: string;
  color?: string;
}

export function QuizGame({ quiz, onBack, title, color = "from-blue-500 to-cyan-500" }: QuizGameProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizComplete(false);
  };

  const getScorePercentage = () => {
    return Math.round((score / quiz.questions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage === 100) return 'Perfect! Outstanding! 🌟';
    if (percentage >= 80) return 'Excellent work! 🎉';
    if (percentage >= 60) return 'Good job! 👍';
    if (percentage >= 40) return 'Not bad! Keep learning 📚';
    return 'Keep practicing! 💪';
  };

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className={`text-7xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                {getScorePercentage()}%
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Quiz Complete!
              </h2>
              <p className="text-2xl text-gray-600">
                {getScoreMessage()}
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 space-y-4">
              <div className="text-6xl font-bold text-gray-900">
                {score} / {quiz.questions.length}
              </div>
              <div className="text-lg text-gray-600">
                Correct Answers
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={handleRestart}
                className={`flex-1 group bg-gradient-to-r ${color} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2`}
              >
                <RotateCcw className="w-5 h-5" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={onBack}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Back to Levels</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">{quiz.icon}</div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-white">{title} - {quiz.name}</h1>
                <p className="text-gray-400">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
              </div>
            </div>
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <Home className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className={`bg-gradient-to-r ${color} h-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-5 lg:p-6 rounded-xl font-semibold text-lg transition-all text-left ${selectedAnswer === null
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-900 cursor-pointer'
                    : index === currentQuestion.correctAnswer
                      ? 'bg-green-500 text-white'
                      : index === selectedAnswer
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {selectedAnswer !== null && (
                      <span>
                        {index === currentQuestion.correctAnswer ? '✓' : index === selectedAnswer ? '✗' : ''}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {showExplanation && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 space-y-2 animate-fade-in-up">
              <h3 className="font-bold text-blue-900">Explanation:</h3>
              <p className="text-blue-800">{currentQuestion.explanation}</p>
            </div>
          )}

          {showExplanation && (
            <button
              onClick={handleNextQuestion}
              className={`w-full group bg-gradient-to-r ${color} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2`}
            >
              <span>{currentQuestionIndex === quiz.questions.length - 1 ? 'See Results' : 'Next Question'}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
