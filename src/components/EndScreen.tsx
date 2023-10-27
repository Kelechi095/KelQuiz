import { useDispatch, useSelector } from "react-redux";
import { endQuiz, startQuiz } from "../redux/quizSlice";
import { RootState } from "../types/types";

export default function EndScreen() {
  const { userScore } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  const handleRestartGame = () => {
    dispatch(startQuiz());
  };
  const handleEndGame = () => {
    dispatch(endQuiz());
  };

  return (
    <div className="p-4 bg-darkBlue h-screen">
      <h2 className="font-semibold font-mono mt-12 fond text-3xl text-center text-cyan-500">
        You scored: {userScore} / 100
      </h2>

      <div className="flex justify-center gap-4 mt-8">
        <button className="border-2 border-cyan-600 p-1 px-4 text-white" onClick={handleRestartGame}>
          Restart Quiz
        </button>

        <button className="border-2 border-cyan-600 p-1 px-8 text-white" onClick={handleEndGame}>
          End Quiz
        </button>
      </div>
    </div>
  );
}
