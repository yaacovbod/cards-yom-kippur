import { useCallback } from 'react';
import type { Question } from '../types/question';
import { StampCard } from './StampCard';
import { SideButton } from './SideButton';
import { useSwipe } from '../hooks/useSwipe';
import { formatTime } from '../hooks/useQuiz';
import dayanImg from '../assets/dayan.png';
import goldaImg from '../assets/golda.png';
import sadatImg from '../assets/sadat.png';
import assadImg from '../assets/assad.png';

const leaderImages = [dayanImg, goldaImg, sadatImg, assadImg];

type Props = {
  question: Question;
  currentIndex: number;
  total: number;
  elapsed: number;
  onAnswer: (userSaysTrue: boolean) => void;
};

export function QuestionScreen({ question, currentIndex, total, elapsed, onAnswer }: Props) {
  const handleNo  = useCallback(() => onAnswer(false), [onAnswer]);
  const handleYes = useCallback(() => onAnswer(true),  [onAnswer]);
  const { dragX, pointerHandlers } = useSwipe(handleNo, handleYes);

  const rotate      = dragX * 0.06;
  const labelOpacity = Math.min(Math.abs(dragX) / 60, 1);
  const isDragging  = dragX !== 0;

  return (
    <div className="screen question-screen">
      <div className="question-layout">
        {/* RTL flex: first child = physical RIGHT. "היה" right, "לא היה" left — matches swipe direction */}
        <SideButton label="היה" variant="yes" onClick={handleYes} />

        <div className="question-center">
          <div
            className="swipe-card"
            style={{
              transform: `translateX(${dragX}px) rotate(${rotate}deg)`,
              transition: isDragging ? 'none' : 'transform 0.35s ease',
            }}
            {...pointerHandlers}
          >
            <div className="swipe-label swipe-label--yes" style={{ opacity: dragX > 5 ? labelOpacity : 0 }}>
              היה
            </div>
            <div className="swipe-label swipe-label--no" style={{ opacity: dragX < -5 ? labelOpacity : 0 }}>
              לא היה
            </div>
            <StampCard key={currentIndex} imageSrc={leaderImages[currentIndex % leaderImages.length]} />
          </div>

          <div className="question-meta">
            <span className="question-counter">{currentIndex + 1} / {total}</span>
            <span className="quiz-timer">{formatTime(elapsed)}</span>
          </div>
          <p className="question-text">{question.text}</p>
          <p className="swipe-hint">ימינה: היה &nbsp;|&nbsp; שמאלה: לא היה</p>
        </div>

        <SideButton label="לא היה" variant="no" onClick={handleNo} />
      </div>
    </div>
  );
}
