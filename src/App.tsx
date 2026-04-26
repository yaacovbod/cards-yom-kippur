import { Background } from './components/Background';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { AnswerScreen } from './components/AnswerScreen';
import { ResultScreen } from './components/ResultScreen';
import { useQuiz } from './hooks/useQuiz';

export default function App() {
  const { state, currentQuestion, currentIndex, total, score, lastAnswerCorrect, start, answer, next, restart } =
    useQuiz();

  return (
    <Background>
      {state === 'welcome' && <WelcomeScreen onStart={start} />}
      {state === 'question' && currentQuestion && (
        <QuestionScreen
          question={currentQuestion}
          currentIndex={currentIndex}
          total={total}
          onAnswer={answer}
        />
      )}
      {state === 'revealed' && currentQuestion && (
        <AnswerScreen question={currentQuestion} correct={lastAnswerCorrect} onNext={next} />
      )}
      {state === 'result' && <ResultScreen score={score} total={total} onRestart={restart} />}
    </Background>
  );
}
