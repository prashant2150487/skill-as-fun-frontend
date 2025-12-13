import { useState } from 'react';
// import { QuizGame } from '../components/QuizGame';
// import { quizzes } from '../data/quizzes';
import { ArrowRight, Zap } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { quizzes } from '@/constants/quizzes';
import { QuizGame } from '@/components/quizGame';

export function QuizPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const { ref, isInView } = useInView();

  if (selectedQuiz) {
    const quiz = quizzes.find(q => q.id === selectedQuiz);
    if (quiz) {
      return <QuizGame quiz={quiz} onBack={() => setSelectedQuiz(null)} />;
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-2 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Interactive{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Quiz Challenge
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Test your knowledge across different tech topics and track your progress. Perfect for learners of all levels!
            </p>
          </div>

          <div ref={ref} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Quiz</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizzes.map((quiz, index) => (
                  <div
                    key={quiz.id}
                    className={`group cursor-pointer ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => setSelectedQuiz(quiz.id)}
                      className={`w-full h-full bg-gradient-to-br ${quiz.color} rounded-2xl p-8 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden relative group`}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                      <div className="relative z-10 space-y-6 text-left h-full flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="text-6xl">{quiz.icon}</div>
                          <h3 className="text-2xl font-bold">{quiz.title}</h3>
                          <p className="text-white/90 text-sm leading-relaxed">{quiz.description}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-xs font-semibold text-white/80">Difficulty</div>
                            <div className="font-bold">{quiz.difficulty}</div>
                          </div>
                          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg group-hover:bg-white/30 transition-all">
                            <span className="text-sm font-semibold">{quiz.questions.length} Q's</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border-2 border-blue-200 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">6 Quizzes</h3>
                  <p className="text-gray-600">Different topics and difficulty levels</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Instant Feedback</h3>
                  <p className="text-gray-600">Get explanations for every question</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Track Progress</h3>
                  <p className="text-gray-600">See your score and improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
