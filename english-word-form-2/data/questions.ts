
import type { QuestionSet } from '../types';

export const WORD_FORM_QUESTIONS: QuestionSet[] = [
  {
    page: 1,
    questions: [
      {
        id: 101,
        sentence: "He spoke with great ______ about his travel experiences.",
        baseWord: "confident",
        options: { noun: 'confidence', verb: 'confide', adjective: 'confident', adverb: 'confidently' },
        correctAnswer: { type: 'noun', word: 'confidence' }
      },
      {
        id: 102,
        sentence: "The new building's ______ is both modern and functional.",
        baseWord: "design",
        options: { noun: 'design', verb: 'design', adjective: 'designed', adverb: 'designingly' },
        correctAnswer: { type: 'noun', word: 'design' }
      },
      {
        id: 103,
        sentence: "It is ______ for a new driver to be nervous on the highway.",
        baseWord: "common",
        options: { noun: 'commonness', verb: 'commune', adjective: 'common', adverb: 'commonly' },
        correctAnswer: { type: 'adjective', word: 'common' }
      },
      {
        id: 104,
        sentence: "The team celebrated their ______ victory in the finals.",
        baseWord: "decide",
        options: { noun: 'decision', verb: 'decide', adjective: 'decisive', adverb: 'decisively' },
        correctAnswer: { type: 'adjective', word: 'decisive' }
      },
      {
        id: 105,
        sentence: "She handled the ______ situation with calm and professionalism.",
        baseWord: "difficult",
        options: { noun: 'difficulty', verb: 'none', adjective: 'difficult', adverb: 'difficultly' },
        correctAnswer: { type: 'adjective', word: 'difficult' }
      },
      {
        id: 106,
        sentence: "He worked ______ to ensure the project was completed on time.",
        baseWord: "continue",
        options: { noun: 'continuation', verb: 'continue', adjective: 'continuous', adverb: 'continuously' },
        correctAnswer: { type: 'adverb', word: 'continuously' }
      },
      {
        id: 107,
        sentence: "The company needs to ______ its marketing strategy.",
        baseWord: "compare",
        options: { noun: 'comparison', verb: 'compare', adjective: 'comparative', adverb: 'comparatively' },
        correctAnswer: { type: 'verb', word: 'compare' }
      },
      {
        id: 108,
        sentence: "The ______ between the two countries have improved recently.",
        baseWord: "connect",
        options: { noun: 'connection', verb: 'connect', adjective: 'connected', adverb: 'connectively' },
        correctAnswer: { type: 'noun', word: 'connection' }
      },
      {
        id: 109,
        sentence: "The instructions were so ______ that everyone understood them.",
        baseWord: "simple", // Not from image but good example
        options: { noun: 'simplicity', verb: 'simplify', adjective: 'simple', adverb: 'simply' },
        correctAnswer: { type: 'adjective', word: 'simple' }
      },
      {
        id: 110,
        sentence: "Her ______ as a writer is growing with each new book.",
        baseWord: "create",
        options: { noun: 'creation', verb: 'create', adjective: 'creative', adverb: 'creatively' },
        correctAnswer: { type: 'noun', word: 'creation' }
      }
    ]
  },
  {
    page: 2,
    questions: [
      {
        id: 201,
        sentence: "He felt a great sense of ______ after finishing the marathon.",
        baseWord: "complete",
        options: { noun: 'completion', verb: 'complete', adjective: 'complete', adverb: 'completely' },
        correctAnswer: { type: 'noun', word: 'completion' }
      },
      {
        id: 202,
        sentence: "The evidence was ______ and led to a conviction.",
        baseWord: "compel",
        options: { noun: 'compulsion', verb: 'compel', adjective: 'compulsory', adverb: 'compulsively' },
        correctAnswer: { type: 'adjective', word: 'compulsory' }
      },
      {
        id: 203,
        sentence: "The teacher tried to ______ the students to participate more.",
        baseWord: "courage",
        options: { noun: 'courage', verb: 'encourage', adjective: 'courageous', adverb: 'courageously' },
        correctAnswer: { type: 'verb', word: 'encourage' }
      },
      {
        id: 204,
        sentence: "The ______ of the new park was a community project.",
        baseWord: "construct",
        options: { noun: 'construction', verb: 'construct', adjective: 'constructive', adverb: 'constructively' },
        correctAnswer: { type: 'noun', word: 'construction' }
      },
      {
        id: 205,
        sentence: "The documentary provided a ______ account of the historical events.",
        baseWord: "drama",
        options: { noun: 'drama', verb: 'dramatize', adjective: 'dramatic', adverb: 'dramatically' },
        correctAnswer: { type: 'adjective', word: 'dramatic' }
      },
      {
        id: 206,
        sentence: "The problem was far more ______ than we initially thought.",
        baseWord: "complicate",
        options: { noun: 'complication', verb: 'complicate', adjective: 'complicated', adverb: 'none' },
        correctAnswer: { type: 'adjective', word: 'complicated' }
      },
      {
        id: 207,
        sentence: "The weather became ______ hot during the afternoon.",
        baseWord: "danger",
        options: { noun: 'danger', verb: 'endanger', adjective: 'dangerous', adverb: 'dangerously' },
        correctAnswer: { type: 'adverb', word: 'dangerously' }
      },
      {
        id: 208,
        sentence: "They had to ______ the entire house after the fire.",
        baseWord: "destroy",
        options: { noun: 'destruction', verb: 'destroy', adjective: 'destructive', adverb: 'destructively' },
        correctAnswer: { type: 'verb', word: 'destroy' }
      },
      {
        id: 209,
        sentence: "There is a significant ______ between the two reports.",
        baseWord: "differ",
        options: { noun: 'difference', verb: 'differ', adjective: 'different', adverb: 'differently' },
        correctAnswer: { type: 'noun', word: 'difference' }
      },
      {
        id: 210,
        sentence: "He waited ______ for the results to be announced.",
        baseWord: "eager",
        options: { noun: 'eagerness', verb: 'none', adjective: 'eager', adverb: 'eagerly' },
        correctAnswer: { type: 'adverb', word: 'eagerly' }
      }
    ]
  },
  {
    page: 3,
    questions: [
       {
        id: 301,
        sentence: "The city's ______ depends heavily on tourism.",
        baseWord: "economy",
        options: { noun: 'economy', verb: 'economize', adjective: 'economic', adverb: 'economically' },
        correctAnswer: { type: 'noun', word: 'economy' }
      },
      {
        id: 302,
        sentence: "This new software is much more ______ than the old version.",
        baseWord: "effect",
        options: { noun: 'effect', verb: 'effect', adjective: 'effective', adverb: 'effectively' },
        correctAnswer: { type: 'adjective', word: 'effective' }
      },
      {
        id: 303,
        sentence: "The speech had a powerful ______ on the audience.",
        baseWord: "effect",
        options: { noun: 'effect', verb: 'affect', adjective: 'effective', adverb: 'effectively' },
        correctAnswer: { type: 'noun', word: 'effect' }
      },
       {
        id: 304,
        sentence: "We must use our resources ______ to avoid waste.",
        baseWord: "efficient",
        options: { noun: 'efficiency', verb: 'none', adjective: 'efficient', adverb: 'efficiently' },
        correctAnswer: { type: 'adverb', word: 'efficiently' }
      },
       {
        id: 305,
        sentence: "Good ______ is crucial for success in any field.",
        baseWord: "educate",
        options: { noun: 'education', verb: 'educate', adjective: 'educational', adverb: 'educationally' },
        correctAnswer: { type: 'noun', word: 'education' }
      },
      {
        id: 306,
        sentence: "The government needs to ______ a new president next year.",
        baseWord: "elect",
        options: { noun: 'election', verb: 'elect', adjective: 'elective', adverb: 'electively' },
        correctAnswer: { type: 'verb', word: 'elect' }
      },
      {
        id: 307,
        sentence: "It is not ______ to drive without a seatbelt.",
        baseWord: "legal", // Not from image but good example
        options: { noun: 'legality', verb: 'legalize', adjective: 'legal', adverb: 'legally' },
        correctAnswer: { type: 'adjective', word: 'legal' }
      },
      {
        id: 308,
        sentence: "The athlete's ______ to her training was admirable.",
        baseWord: "dedicate", // Not from image but good example
        options: { noun: 'dedication', verb: 'dedicate', adjective: 'dedicated', adverb: 'dedicatedly' },
        correctAnswer: { type: 'noun', word: 'dedication' }
      },
      {
        id: 309,
        sentence: "Her room was ______ decorated for the party.",
        baseWord: "beauty", // Not from image but good example
        options: { noun: 'beauty', verb: 'beautify', adjective: 'beautiful', adverb: 'beautifully' },
        correctAnswer: { type: 'adverb', word: 'beautifully' }
      },
       {
        id: 310,
        sentence: "It's important to be ______ when making business decisions.",
        baseWord: "practical", // Not from image but good example
        options: { noun: 'practicality', verb: 'practice', adjective: 'practical', adverb: 'practically' },
        correctAnswer: { type: 'adjective', word: 'practical' }
      }
    ]
  }
];
