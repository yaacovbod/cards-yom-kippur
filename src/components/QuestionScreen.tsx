import type { Question } from '../types/question';
import { StampCard } from './StampCard';
import { SideButton } from './SideButton';

type QuestionScreenProps = {
  question: Question;
  currentIndex: number;
  total: number;
  onAnswer: (userSaysTrue: boolean) => void;
};

export function QuestionScreen({ question, currentIndex, total, onAnswer }: QuestionScreenProps) {
  return (
    <div className="screen question-screen">
      <div className="question-layout">
        <SideButton label="לא היה" variant="no" onClick={() => onAnswer(false)} />
        <div className="question-center">
          <StampCard imageSrc={question.imageSrc} imageCredit={question.imageCredit} />
          <p className="question-counter">{currentIndex + 1} / {total}</p>
          <p className="question-text">{question.text}</p>
        </div>
        <SideButton label="היה" variant="yes" onClick={() => onAnswer(true)} />
      </div>
    </div>
  );
}
