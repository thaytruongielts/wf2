
import React from 'react';
import type { Question, WordFormType } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  userAnswer: string | undefined;
  onAnswerChange: (questionId: number, answer: string) => void;
  isSubmitted: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, userAnswer, onAnswerChange, isSubmitted }) => {
  const { id, sentence, options, correctAnswer } = question;

  const getOptionStyle = (optionWord: string, optionType: WordFormType) => {
    let baseStyle = "w-full text-left p-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800 flex items-center justify-between";
    const selected = userAnswer === optionWord;

    if (isSubmitted) {
      const isCorrect = optionWord === correctAnswer.word;
      const isSelectedAndWrong = selected && !isCorrect;

      if (isCorrect) {
        return `${baseStyle} bg-emerald-100 dark:bg-emerald-900 border-emerald-500 dark:border-emerald-600 text-emerald-800 dark:text-emerald-200 font-semibold`;
      }
      if (isSelectedAndWrong) {
        return `${baseStyle} bg-red-100 dark:bg-red-900 border-red-500 dark:border-red-600 text-red-800 dark:text-red-200`;
      }
      return `${baseStyle} bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed`;
    }

    if (selected) {
      return `${baseStyle} bg-sky-100 dark:bg-sky-900 border-sky-500 dark:border-sky-600 ring-2 ring-sky-500`;
    }

    return `${baseStyle} bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:border-sky-500 hover:dark:border-sky-600`;
  };

  const getIcon = (optionWord: string) => {
    if (!isSubmitted) {
      if (userAnswer === optionWord) return <i className="fas fa-check-circle text-sky-500"></i>;
      return <i className="far fa-circle text-slate-400"></i>;
    }

    const isCorrect = optionWord === correctAnswer.word;
    const isSelected = userAnswer === optionWord;

    if (isCorrect) return <i className="fas fa-check-circle text-emerald-500"></i>;
    if (isSelected && !isCorrect) return <i className="fas fa-times-circle text-red-500"></i>;
    return null;
  };

  return (
    <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
      <p className="mb-4 text-lg">
        <span className="font-bold text-sky-500 mr-2">{questionNumber}.</span>
        {sentence.split('______').map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < sentence.split('______').length - 1 && (
              <span className="font-bold text-lg inline-block bg-slate-200 dark:bg-slate-700 rounded px-3 py-1 mx-1 text-slate-500 dark:text-slate-400">
                {isSubmitted ? correctAnswer.word : '...'}
              </span>
            )}
          </React.Fragment>
        ))}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {(Object.keys(options) as WordFormType[]).map((type) => {
          const word = options[type];
          return (
            <button
              key={type}
              onClick={() => onAnswerChange(id, word)}
              disabled={isSubmitted}
              className={getOptionStyle(word, type)}
            >
              <span>
                <span className="font-semibold">{word}</span>
                <span className="text-xs ml-2 uppercase bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full">{type}</span>
              </span>
              {getIcon(word)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
