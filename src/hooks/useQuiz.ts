import { useState, useCallback, useRef } from 'react';
import { questions as allQuestions } from '../data/questions';
import type { Question } from '../types/question';

export type QuizState = 'welcome' | 'question' | 'revealed' | 'result';

const GAME_SIZE = 9;

function pickQuestions(): Question[] {
  const trueQ = allQuestions.filter(q => q.isTrue);
  const falseQ = allQuestions.filter(q => !q.isTrue);
  const shuffle = <T>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

  // Pick 3-6 true questions, rest false (always 3-6 each)
  const trueCount = Math.floor(Math.random() * 4) + 3;
  const falseCount = GAME_SIZE - trueCount;

  return shuffle([
    ...shuffle(trueQ).slice(0, trueCount),
    ...shuffle(falseQ).slice(0, falseCount),
  ]);
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export function useQuiz() {
  const [state, setState] = useState<QuizState>('welcome');
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [finalTime, setFinalTime] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(0);

  const currentQuestion = sessionQuestions[currentIndex];
  const total = GAME_SIZE;

  const start = useCallback(() => {
    const picked = pickQuestions();
    setSessionQuestions(picked);
    setCurrentIndex(0);
    setScore(0);
    setElapsed(0);
    setFinalTime(0);
    setState('question');

    if (timerRef.current) clearInterval(timerRef.current);
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
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
      if (timerRef.current) clearInterval(timerRef.current);
      setFinalTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      setState('result');
    } else {
      setCurrentIndex((i) => i + 1);
      setState('question');
    }
  }, [currentIndex, total]);

  const restart = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setElapsed(0);
    setFinalTime(0);
    setState('welcome');
  }, []);

  return {
    state,
    currentQuestion,
    currentIndex,
    total,
    score,
    elapsed,
    finalTime,
    lastAnswerCorrect,
    start,
    answer,
    next,
    restart,
  };
}
