
import React, { useState, useMemo } from 'react';
import { WORD_FORM_QUESTIONS } from './data/questions';
import QuestionCard from './components/QuestionCard';
import ScoreDisplay from './components/ScoreDisplay';
import Pagination from './components/Pagination';
import type { Question } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number | null>(null);

  const totalPages = WORD_FORM_QUESTIONS.length;

  const currentQuestionSet = useMemo(() => {
    return WORD_FORM_QUESTIONS.find(set => set.page === currentPage);
  }, [currentPage]);

  const questions = currentQuestionSet?.questions || [];

  const handleAnswerChange = (questionId: number, answer: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer.word) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  const resetPage = () => {
    setUserAnswers({});
    setScore(null);
    setIsSubmitted(false);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      resetPage();
    }
  };

  const handleRestart = () => {
    resetPage();
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      resetPage();
    }
  };
  
  const allQuestionsAnswered = Object.keys(userAnswers).length === questions.length;

  return (
    <div className="min-h-screen font-sans flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500 mb-2">
            Word Form Practice
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Select the correct word form to complete each sentence.
          </p>
        </header>

        <main className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              questionNumber={index + 1}
              userAnswer={userAnswers[question.id]}
              onAnswerChange={handleAnswerChange}
              isSubmitted={isSubmitted}
            />
          ))}

          {isSubmitted && score !== null && (
            <ScoreDisplay
              score={score}
              totalQuestions={questions.length}
              onNextPage={handleNextPage}
              onRestart={handleRestart}
              isLastPage={currentPage === totalPages}
            />
          )}

          {!isSubmitted && (
            <div className="flex justify-center pt-4">
              <button
                onClick={handleSubmit}
                disabled={!allQuestionsAnswered}
                className="w-full md:w-auto px-12 py-3 text-lg font-bold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-700 transition-all duration-300 disabled:bg-slate-400 disabled:dark:bg-slate-600 disabled:cursor-not-allowed transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800"
              >
                Check Answers
              </button>
            </div>
          )}
        </main>

        <footer className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </footer>
      </div>
    </div>
  );
};

export default App;
