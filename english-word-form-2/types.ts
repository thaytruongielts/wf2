
export type WordFormType = 'noun' | 'verb' | 'adjective' | 'adverb';

export interface Question {
  id: number;
  sentence: string;
  baseWord: string;
  options: {
    noun: string;
    verb: string;
    adjective: string;
    adverb: string;
  };
  correctAnswer: {
    type: WordFormType;
    word: string;
  };
}

export interface QuestionSet {
  page: number;
  questions: Question[];
}
