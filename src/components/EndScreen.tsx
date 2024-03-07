import { useDispatch, useSelector } from "react-redux";
import { endQuiz, startQuiz } from "../redux/quizSlice";
import { RootState } from "../types/types";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function EndScreen() {
  const { userScore } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  const handleRestartGame = () => {
    dispatch(startQuiz());
  };
  const handleEndGame = () => {
    dispatch(endQuiz());
  };

  const percentage = userScore;

  return (
    <div className="p-4 bg-darkBlue h-screen">
      <div className="w-32 mx-auto mt-8">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "20px",

            pathTransitionDuration: 0.5,

            pathColor: ` rgb(14 116 144)`,
            textColor: "rgb(14 116 144)",
            trailColor: "#d6d6d6",
            backgroundColor: "cyan",
          })}
        />
        ;
      </div>

      <h2 className="font-semibold font-mono mt-12 fond text-xl text-center text-cyan-500">
        You answered {userScore / 10} out of 10 questions
      </h2>

      <div className="flex justify-center gap-4 mt-8">
        <button
          className="border-2 rounded border-cyan-600 p-1 px-4 text-white"
          onClick={handleRestartGame}
        >
          Restart Quiz
        </button>

        <button
          className="border-2 rounded border-cyan-600 p-1 px-8 text-white"
          onClick={handleEndGame}
        >
          End Quiz
        </button>
      </div>
    </div>
  );
}
