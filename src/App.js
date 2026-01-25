import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";

// import DateCounter from "./DateCounter";

const initialState = {
  questions: [],
  status: "loading",
  error: null,
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
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
function App() {
  // const [questions, setQuestions] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, error } = state;

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

  return (
    <div className="app">
      {/* <h1>Hello, World!</h1> */}
      {/* <DateCounter /> */}
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error message={error} />}
        {status === "ready" && (
          <ul>
            {questions.map((question) => (
              <li key={question.id}>{question.question}</li>
            ))}
          </ul>
        )}
      </Main>
    </div>
  );
}

export default App;
