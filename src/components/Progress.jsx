function Progress({ index, numQuestions, points, highscore, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> out of{" "}
        <strong>{numQuestions}</strong>
      </p>

      <p>
        <strong>{points}</strong>/{highscore}
      </p>
    </header>
  );
}

export default Progress;
