import Header from "./Header";
import Main from "./Main";

// import DateCounter from "./DateCounter";
function App() {
  return (
    <div className="app">
      {/* <h1>Hello, World!</h1> */}
      {/* <DateCounter /> */}
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
