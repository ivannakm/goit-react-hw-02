import css from "./Options.module.css";

const Options = ({ options, onFeedback, onReset, total }) => {
  return (
    <div className={css.container}>
      {options.map((option) => (
        <button
          className={css.button}
          key={option}
          onClick={() => onFeedback(option)}
        >
          {option}
        </button>
      ))}

      {total > 0 && (
        <button
          className={css.button}
          onClick={onReset}
          style={{ marginLeft: "10px", backgroundColor: "red" }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
