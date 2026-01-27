import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import FinishButton from "./components/FinishButton";

// import DateCounter from "./DateCounter";

const initialState = {
  questions: [],
  status: "loading",
  error: null,
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        error: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };

    case "START_QUIZ":
      return {
        ...state,
        status: "active",
      };

    case "ANSWER_QUESTION":
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "FINISH_QUIZ":
      return {
        ...state,
        status: "finished",
        answer: null,
      };
    case "RESET":
      return initialState;

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
function App() {
  // const [questions, setQuestions] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, error, index, answer, points } = state;

  const numQuestions = questions.length;
  const highscore = questions.reduce((sum, q) => sum + q.points, 0);
  const lastQuestion = index === numQuestions - 1;

  useEffect(function () {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_QUESTIONS", payload: data }))
      .catch((error) => {
        console.error("Error fetching questions:", error);
        dispatch({ type: "SET_ERROR", payload: error.message });
      });
  }, []);

  // console.log(questions);

  function handleStartQuiz() {
    dispatch({ type: "START_QUIZ" });
  }

  console.log(status);

  return (
    <div className="app">
      {/* <h1>Hello, World!</h1> */}
      {/* <DateCounter /> */}
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error message={error} />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} onStart={handleStartQuiz} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              highscore={highscore}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              points={points}
            />
            {lastQuestion ? (
              <FinishButton
                points={points}
                highscore={highscore}
                dispatch={dispatch}
              />
            ) : (
              <NextButton dispatch={dispatch} answer={answer} />
            )}
          </>
        )}

        {status === "finished" && (
          <FinishScreen points={points} highscore={highscore} />
        )}
      </Main>
    </div>
  );
}

export default App;
