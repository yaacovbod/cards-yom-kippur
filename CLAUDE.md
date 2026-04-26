# Cards Yom Kippur - היה או לא היה: מלחמת יום הכיפורים

## מטרת הפרויקט
משחק חידון "היה או לא היה" בסגנון N12 לשימוש בכיתה בנושא מלחמת יום הכיפורים (1973). התלמידים מנחשים אם טענות היסטוריות הן אמיתיות או בדויות.

## טכנולוגיות
- React 19 + TypeScript
- Vite (build tool)
- canvas-confetti (אפקט תשובה נכונה)
- Heebo font (Google Fonts)
- CSS Modules + design tokens (ללא Tailwind)

## מבנה קבצים מרכזי
- `src/App.tsx` - נקודת כניסה, מנהל מצבי המשחק ומנתב בין מסכים
- `src/components/WelcomeScreen.tsx` - מסך פתיחה
- `src/components/QuestionScreen.tsx` - מסך שאלה פעילה
- `src/components/AnswerScreen.tsx` - מסך חשיפת תשובה
- `src/components/ResultScreen.tsx` - מסך סיום עם ניקוד
- `src/components/StampCard.tsx` - רכיב הבול עם אנימציית הפיכה
- `src/components/SideButton.tsx` - כפתורי "היה" / "לא היה"
- `src/components/Background.tsx` - רקע קבוע לאורך המשחק
- `src/components/Confetti.tsx` - אפקט קונפטי לתשובה נכונה
- `src/hooks/useQuiz.ts` - state machine של המשחק (welcome/question/revealed/result)
- `src/hooks/useSwipe.ts` - זיהוי swipe למובייל
- `src/data/questions.ts` - מערך השאלות
- `src/types/question.ts` - טיפוס Question
- `src/styles/stamp.css` - עיצוב הבול עם שוליים מנוקבים ו-flip animation
- `public/stamps/` - תיקייה לאיורים/תמונות לכל שאלה
- `files/` - קבצי PDF ומקורות להגשה

## קהל יעד
תלמידי תיכון בכיתה בשיעורי היסטוריה.

## פלטה ועיצוב
בורדו-חום נוסטלגי (#4A1F1F), בולים בסגנון רטרו עם שוליים מנוקבים, פונט Heebo, אקסנט זהב עתיק (#B8954A).

## הוספת שאלות חדשות
ערוך את `src/data/questions.ts` והוסף אלמנטים למערך `questions`. כל שאלה זקוקה ל:
- `imageSrc` - נתיב מתחת ל-`public/stamps/` (למשל `/stamps/my-image.jpg`)
- `text` - הטענה ההיסטורית
- `isTrue` - האם הטענה נכונה
- `explanation` - הסבר שיוצג אחרי הניחוש
