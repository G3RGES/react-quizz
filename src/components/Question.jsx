import Options from "./Options";

function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} />

      <button>Answer</button>
      <button>Next Question</button>
      <button>Finish Quiz</button>
      <button>Restart Quiz</button>
    </div>
  );
}

export default Question;
