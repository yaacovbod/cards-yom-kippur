import { useState, useCallback } from 'react';
import { questions } from '../data/questions';

export type QuizState = 'welcome' | 'question' | 'revealed' | 'result';

export function useQuiz() {
  const [state, setState] = useState<QuizState>('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;

  const start = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setState('question');
  }, []);

  const answer = useCallback(
    (userSaysTrue: boolean) => {
      const correct = userSaysTrue === currentQuestion.isTrue;
      setLastAnswerCorrect(correct);
      if (correct) setScore((s) => s + 1);
      setState('revealed');
    },
    [currentQuestion]
  );

  const next = useCallback(() => {
    if (currentIndex + 1 >= total) {
      setState('result');
    } else {
      setCurrentIndex((i) => i + 1);
      setState('question');
    }
  }, [currentIndex, total]);

  const restart = useCallback(() => {
    setState('welcome');
  }, []);

  return {
    state,
    currentQuestion,
    currentIndex,
    total,
    score,
    lastAnswerCorrect,
    start,
    answer,
    next,
    restart,
  };
}
