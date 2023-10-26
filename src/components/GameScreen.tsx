import { useDispatch, useSelector } from "react-redux";
import {
  endQuiz,
  finishQuiz,
  increaseUserScore,
  nextQuestion,
  startQuiz,
  startTimer,
} from "../redux/quizSlice";
import { questions } from "../data";
import { RootState } from "../types/types";
import { useEffect } from "react";

export default function GameScreen() {
  const dispatch = useDispatch();

  const { questionIndex, userScore, timer } = useSelector(
    (state: RootState) => state.quiz
  );

  const handleEndGame = () => {
    dispatch(endQuiz());
  };
  const handleRestartGame = () => {
    dispatch(startQuiz());
  };
  const handleFinishGame = () => {
    dispatch(finishQuiz());
  };

  const handleNextQuestion = (answer: number, index: number) => {
    if (questionIndex === questions.length - 1) {
      dispatch(finishQuiz());
    } else {
      dispatch(nextQuestion());
    }
    if (answer === index) {
      dispatch(increaseUserScore(timer));
    }
  };

  useEffect(() => {
    if (timer > 1) {
      const id = setInterval(() => {
        dispatch(startTimer());
      }, 1000);
      return () => clearInterval(id);
    }
  }, [dispatch, timer]);

  console.log(timer);

  return (
    <div className="p-4">
      <h1 className="text-center font-semibold">Score: {userScore}</h1>
      <h1 className="text-center font-semibold">Timer: {timer}</h1>
      <h1 className="mt-12 text-center font-medium uppercase">
        {questionIndex + 1}) {questions[questionIndex].question}
      </h1>
      <div className="grid grid-cols-2 mt-4 gap-3 max-w-sm mx-auto lg:max-w-lg">
        {questions[questionIndex].options.map((option, index) => (
          <button
            className="border"
            key={index}
            onClick={() =>
              handleNextQuestion(questions[questionIndex].answer, index)
            }
          >
            {option}
          </button>
        ))}
      </div>
      <div className="p-2 mt-12 grid grid-cols-3 gap-3 max-w-sm mx-auto lg:max-w-lg">
        <button className="border p-1 text-sm" onClick={handleEndGame}>
          End Quiz
        </button>
        <button className="border p-1 text-sm" onClick={handleRestartGame}>
          Restart Quiz
        </button>
        <button className="border p-1 text-sm" onClick={handleFinishGame}>
          Finish Quiz
        </button>
      </div>
    </div>
  );
}
