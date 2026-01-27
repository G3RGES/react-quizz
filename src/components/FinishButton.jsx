function FinishButton({ dispatch, points, highscore }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "FINISH_QUIZ" })}
    >
      Finish Quiz
    </button>
  );
}

export default FinishButton;
