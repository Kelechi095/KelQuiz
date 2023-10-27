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
import { useEffect, useState } from "react";

export default function GameScreen() {
  const dispatch = useDispatch();
  const [isPicked, setIsPicked] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);

  const { questionIndex, userScore, timer } = useSelector(
    (state: RootState) => state.quiz
  );

  const handleEndGame = () => {
    dispatch(endQuiz());
  };
  const handleRestartGame = () => {
    dispatch(startQuiz());
  };

  const handleCheckAnswer = (answer: number, index: number) => {
    if (answer === index) {
      dispatch(increaseUserScore(timer));
      setIsPicked(true);
    } else {
      setIsPicked(true);
      setWrongAnswer(index);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex === questions.length - 1) {
      dispatch(finishQuiz());
      setWrongAnswer(null);
    } else {
      dispatch(nextQuestion());
      setWrongAnswer(null);
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const id = setInterval(() => {
        dispatch(startTimer());
      }, 1000);

      return () => clearInterval(id);
    }
  }, [dispatch, timer]);

  useEffect(() => {
    setIsPicked(false);
  }, [questionIndex]);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
  });

  const setTimer = (timer: number) => {
    if (timer < 10) {
      return `0${timer}`;
    }
    return timer;
  };

  return (
    <div className="p-4 py-12 flex flex-col justify-between h-screen bg-darkBlue">
      <div className="flex justify-between items-center px-4">
        <div className="flex border rounded-full h-12 w-12 justify-center items-center bg-cyan-600 border-none text-slate-200">
          <h1 className="text-center font-semibold text-2xl">
            {userScore} {/* {userScore === 1 ? "Point" : "Points"} */}
          </h1>
        </div>
        {!isPicked && (
          <h1 className="text-center font-semibold text-2xl text-cyan-600">
            00:{setTimer(timer)}
          </h1>
        )}
      </div>
      <h1 className="text-center font-medium text-2xl font-serif text-slate-100 ">
        {questions[questionIndex].question}
      </h1>
      <div className="grid grid-cols-2 content-center gap-5 max-w-sm mx-auto lg:max-w-lg">
        {questions[questionIndex].options.map((option, index) => (
          <button
            className={
              isPicked && questions[questionIndex].answer === index
                ? "border-2 text-sm md:text-sm lg:text-lg py-2 border-green-500 px-8 text-white"
                : isPicked && index === wrongAnswer
                ? "border-2 text-sm md:text-sm lg:text-lg py-2 px-8 border-red-600 text-white"
                : "border-2 text-sm md:text-sm lg:text-lg py-2 px-8 border-cyan-600 text-white"
            }
            key={index}
            onClick={() =>
              handleCheckAnswer(questions[questionIndex].answer, index)
            }
            disabled={isPicked === true}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className={
            !isPicked
              ? "py-1 p-8 text-white bg-gray-400 rounded"
              : "py-1 px-8 bg-cyan-600 text-white rounded"
          }
          onClick={handleNextQuestion}
          disabled={!isPicked}
        >
          {questionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
      <div className="p-2 grid grid-cols-2 gap-3 max-w-sm mx-auto lg:max-w-lg">
        <button
          className="p-1 py-2 text-sm bg-cyan-600 text-white rounded"
          onClick={handleEndGame}
        >
          End Quiz
        </button>
        <button
          className=" p-1 text-sm px-4  bg-cyan-600 text-white rounded"
          onClick={handleRestartGame}
        >
          Restart Quiz
        </button>
      </div>
      <div>
        <h2 className="text-center font-bold font-mono text-xl text-cyan-600 mb-8">
          QUIZ DOWN
        </h2>
      </div>
    </div>
  );
}
