
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
      <button 
        onClick={handlePrev} 
        disabled={currentPage === 1}
        className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {pageNumbers.map(number => {
        const isCurrent = currentPage === number;
        return (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium border rounded-md transition-colors duration-200 ${
              isCurrent
                ? 'z-10 bg-sky-500 border-sky-500 text-white'
                : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {number}
          </button>
        );
      })}

      <button 
        onClick={handleNext} 
        disabled={currentPage === totalPages}
        className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </nav>
  );
};

export default Pagination;
