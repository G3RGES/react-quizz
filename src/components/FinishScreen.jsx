function FinishScreen({ points, highscore }) {
  const percentage = (points / highscore) * 100;

  return (
    <p>
      You scored <strong>{points}</strong> out of {highscore} (
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
