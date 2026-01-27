import { useEffect } from "react";

function Timer({ dispatch, timeRemaining }) {
  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;

  useEffect(
    function () {
      const timerId = setInterval(function () {
        //   console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(timerId);
    },

    [dispatch],
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
