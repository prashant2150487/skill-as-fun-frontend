import { useNavigate, useParams } from 'react-router-dom';
import { quizzes } from '@/constants/quizzes';
import { QuizGame } from '@/components/quizGame';

export function QuizGameLocal() {
    const { quizId, difficultyId } = useParams();
    const navigate = useNavigate();

    const quiz = quizzes.find(q => q.id === quizId);
    const category = quiz?.categories.find(c => c.id === difficultyId);

    if (!quiz || !category) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Quiz or Difficulty Not Found</h1>
                    <button
                        onClick={() => navigate(`/quiz/${quizId}`)}
                        className="text-blue-600 hover:underline"
                    >
                        Back to Difficulty Selection
                    </button>
                </div>
            </div>
        );
    }

    return (
        <QuizGame
            quiz={category}
            title={quiz.title}
            color={quiz.color}
            onBack={() => navigate(`/quiz/${quizId}`)}
        />
    );
}
