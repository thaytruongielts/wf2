
import React from 'react';

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  onNextPage: () => void;
  onRestart: () => void;
  isLastPage: boolean;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, totalQuestions, onNextPage, onRestart, isLastPage }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const scoreColor = percentage >= 80 ? 'text-emerald-500' : percentage >= 50 ? 'text-yellow-500' : 'text-red-500';

  const getFeedbackMessage = () => {
    if (percentage === 100) return "Excellent! Perfect score!";
    if (percentage >= 80) return "Great job! You're doing very well.";
    if (percentage >= 50) return "Good effort! Keep practicing.";
    return "Keep trying! Practice makes perfect.";
  };
  
  return (
    <div className="text-center p-6 bg-slate-100 dark:bg-slate-900/50 rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-2">Results</h2>
      <p className={`text-5xl font-extrabold ${scoreColor} mb-2`}>
        {score} / {totalQuestions}
      </p>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">{getFeedbackMessage()}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onRestart}
          className="px-6 py-2 font-semibold text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-800 border-2 border-sky-500 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/30 transition-all duration-300"
        >
          <i className="fas fa-redo mr-2"></i> Try Again
        </button>
        {!isLastPage && (
          <button
            onClick={onNextPage}
            className="px-6 py-2 font-semibold text-white bg-emerald-600 rounded-lg shadow-md hover:bg-emerald-700 transition-all duration-300"
          >
            Next Page <i className="fas fa-arrow-right ml-2"></i>
          </button>
        )}
         {isLastPage && (
          <button
            className="px-6 py-2 font-semibold text-white bg-sky-600 rounded-lg shadow-md hover:bg-sky-700 transition-all duration-300"
          >
            All Done! <i className="fas fa-trophy ml-2"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ScoreDisplay;
