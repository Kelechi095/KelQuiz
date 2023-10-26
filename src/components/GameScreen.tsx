import { useDispatch } from "react-redux";
import { endQuiz, finishQuiz, startQuiz } from "../redux/quizSlice";

export default function GameScreen() {
  const dispatch = useDispatch();

  const handleEndGame = () => {
    dispatch(endQuiz());
  };
  const handleRestartGame = () => {
    dispatch(startQuiz());
  };
  const handleFinishGame = () => {
    dispatch(finishQuiz());
  };

  return (
    <div>
      <h2>Question 1</h2>

      <button className="border p-1" onClick={handleEndGame}>
        End Quiz
      </button>
      <button className="border p-1" onClick={handleRestartGame}>
        Restart Quiz
      </button>
      <button className="border p-1" onClick={handleFinishGame}>
        Finish Quiz
      </button>
    </div>
  );
}
