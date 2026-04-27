type WelcomeScreenProps = {
  onStart: () => void;
};

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="screen welcome-screen">
      <div className="welcome-content">
        <p className="welcome-tag">N12 סגנון</p>
        <h1 className="welcome-title">
          היה
          <br />
          או לא
          <br />
          היה
        </h1>
        <p className="welcome-subtitle">
          מלחמת יום הכיפורים 1973
          <br />
          היסטוריה אמיתית או אגדה?
          <br />
          המשימה שלכם להחליט.
        </p>
        <button className="btn-cta" onClick={onStart}>
          התחילו לשחק
        </button>
      </div>
    </div>
  );
}
