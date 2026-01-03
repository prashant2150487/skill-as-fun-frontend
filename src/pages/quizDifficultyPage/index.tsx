import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Zap } from 'lucide-react';
import { quizzes } from '@/constants/quizzes';

export function QuizDifficultyPage() {
    const { quizId } = useParams();
    const navigate = useNavigate();

    const quiz = quizzes.find(q => q.id === quizId);

    if (!quiz) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Quiz Not Found</h1>
                    <button
                        onClick={() => navigate('/quizzes')}
                        className="text-blue-600 hover:underline"
                    >
                        Back to Quizzes
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => navigate('/quizzes')}
                        className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Quizzes
                    </button>

                    <div className="text-center space-y-6 mb-16 animate-fade-in-up">
                        <div className="inline-block p-4 rounded-2xl bg-white shadow-xl mb-4 text-6xl">
                            {quiz.icon}
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            {quiz.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {quiz.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {quiz.categories.map((category, index) => (
                            <button
                                key={category.id}
                                onClick={() => navigate(`/quiz/${quizId}/${category.id}`)}
                                className="group relative bg-white rounded-3xl p-8 border-2 border-transparent hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 text-left overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {category.icon}
                                        </div>
                                        <div className="flex items-center space-x-1 text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            <Star className="w-4 h-4 fill-current" />
                                            <span>{category.questions.length} Questions</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        {category.description}
                                    </p>

                                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                        Start {category.name} Quiz
                                        <Zap className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
