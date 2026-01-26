function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "NEXT_QUESTION" })}
    >
      Next Question
    </button>
  );
}

export default NextButton;
