import { useEffect, useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";

const FEEDBACK_STORAGE_KEY = "feedbackData";

function App() {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // ✅ 1. useEffect для зчитування з localStorage при старті
  useEffect(() => {
    const storedData = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    if (storedData) {
      setClick(JSON.parse(storedData));
    }
  }, []);

  // ✅ 2. useEffect для запису в localStorage при зміні click
  useEffect(() => {
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(click));
  }, [click]);

  const updateFeedback = (feedbackType) => {
    setClick((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    // setClick({ good: 0, neutral: 0, bad: 0 });
    const initial = { good: 0, neutral: 0, bad: 0 };
    setClick(initial);
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(initial));
  };

  const totalFeedback = click.good + click.neutral + click.bad;
  const positivePercentage = totalFeedback
    ? Math.round((click.good / totalFeedback) * 100)
    : 0;
  return (
    <>
      <Description />
      <Options
        options={Object.keys(click)}
        onFeedback={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={click}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
