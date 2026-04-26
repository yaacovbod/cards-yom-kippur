type ResultScreenProps = {
  score: number;
  total: number;
  onRestart: () => void;
};

export function ResultScreen({ score, total, onRestart }: ResultScreenProps) {
  const percent = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percent === 100) return 'מושלם! היסטוריון אמיתי';
    if (percent >= 70) return 'כל הכבוד! שולט בחומר';
    if (percent >= 40) return 'לא רע, יש מה להשלים';
    return 'כדאי לחזור על החומר';
  };

  return (
    <div className="screen result-screen">
      <div className="result-content">
        <h2 className="result-title">סיום המשחק</h2>
        <div className="result-score-wrap">
          <span className="result-score">{score}</span>
          <span className="result-total"> / {total}</span>
        </div>
        <p className="result-message">{getMessage()}</p>
        <button className="btn-cta" onClick={onRestart}>
          שחקו שוב
        </button>
      </div>
    </div>
  );
}
