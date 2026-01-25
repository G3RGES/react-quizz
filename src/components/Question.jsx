import Options from "./Options";

function Question({ question, dispatch, answer, points }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <h4>Points: {points}</h4>

      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        points={points}
      />

      <button>Answer</button>
      <button>Next Question</button>
      <button>Finish Quiz</button>
      <button>Restart Quiz</button>
    </div>
  );
}

export default Question;
