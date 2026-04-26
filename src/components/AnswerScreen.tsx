import type { Question } from '../types/question';
import { Confetti } from './Confetti';
import { formatTime } from '../hooks/useQuiz';

type AnswerScreenProps = {
  question: Question;
  correct: boolean;
  elapsed: number;
  onNext: () => void;
};

export function AnswerScreen({ question, correct, elapsed, onNext }: AnswerScreenProps) {
  const verdict = question.isTrue ? 'היה' : 'לא היה';

  return (
    <div className="screen answer-screen">
      <Confetti trigger={correct} />
      <div className="answer-layout">
        <div className={`answer-stamp ${correct ? 'answer-correct' : 'answer-wrong'}`}>
          <h2 className="answer-verdict">{verdict}</h2>
          <p className="answer-explanation">{question.explanation}</p>
        </div>
        <div className={`answer-badge ${correct ? 'badge-correct' : 'badge-wrong'}`}>
          {correct ? 'צדקת!' : 'טעית'}
        </div>
        <span className="quiz-timer quiz-timer--answer">{formatTime(elapsed)}</span>
        <button className="btn-cta btn-next" onClick={onNext}>
          הבא
        </button>
      </div>
    </div>
  );
}
