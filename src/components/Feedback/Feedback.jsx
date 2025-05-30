import css from "./Feedback.module.css";

const Feedback = ({ values, total, positivePercentage }) => {
  return (
    <div className={css.feedback}>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
