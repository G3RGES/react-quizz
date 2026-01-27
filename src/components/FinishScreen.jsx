function FinishScreen({ points, highscore }) {
  const percentage = (points / highscore) * 100;

  let emoji;

  if (percentage === 100) emoji = "🎖️";

  if (percentage >= 80 && percentage < 100) emoji = "🏅";

  if (percentage >= 50 && percentage < 80) emoji = "👍";

  if (percentage >= 0 && percentage < 50) emoji = "👎";

  if (percentage === 0) emoji = "💩";

  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {highscore} (
      {Math.ceil(percentage)}%) {emoji}
    </p>
  );
}

export default FinishScreen;
