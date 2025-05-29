import css from "./Options.module.css";

const Options = ({ options, onFeedback, onReset, total }) => {
  return (
    <div>
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
        <button onClick={onReset} style={{ marginLeft: "10px", color: "red" }}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
