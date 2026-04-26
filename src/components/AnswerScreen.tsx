import type { Question } from '../types/question';
import { StampCard } from './StampCard';
import { Confetti } from './Confetti';

type AnswerScreenProps = {
  question: Question;
  correct: boolean;
  onNext: () => void;
};

export function AnswerScreen({ question, correct, onNext }: AnswerScreenProps) {
  const verdict = question.isTrue ? 'היה' : 'לא היה';

  return (
    <div className="screen answer-screen">
      <Confetti trigger={correct} />
      <div className="answer-layout">
        <StampCard flipped>
          <div className={`answer-content ${correct ? 'answer-correct' : 'answer-wrong'}`}>
            <h2 className="answer-verdict">{verdict}</h2>
            <p className="answer-explanation">{question.explanation}</p>
          </div>
        </StampCard>
        <div className={`answer-badge ${correct ? 'badge-correct' : 'badge-wrong'}`}>
          {correct ? 'צדקת!' : 'טעית'}
        </div>
        <button className="btn-cta btn-next" onClick={onNext}>
          הבא
        </button>
      </div>
    </div>
  );
}
