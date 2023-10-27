import { useDispatch, useSelector } from "react-redux";
import {
  endQuiz,
  finishQuiz,
  increaseUserScore,
  nextQuestion,
  startQuiz,
  startTimer,
} from "../redux/quizSlice";

import { RootState } from "../types/types";
import { useEffect, useState } from "react";
import useGetQuestions from "../useGetQuestions";
import {shuffle} from "../useGetQuestions"

export default function GameScreen() {
  const dispatch = useDispatch();
  const [isPicked, setIsPicked] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);

  const {questions} = useGetQuestions()

  const { questionIndex, userScore, timer } = useSelector(
    (state: RootState) => state.quiz
  );

  const handleEndGame = () => {
    dispatch(endQuiz());
    shuffle(questions)
  };
  const handleRestartGame = () => {
    dispatch(startQuiz());
    setIsPicked(false)
    shuffle(questions)
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
    <div className="p-4 py-6 bg-darkBlue">
      <div className="flex justify-between items-center px-2 mb-8">
        <div className="flex rounded-full h-8 w-8 justify-center items-center border-2 border-cyan-500 text-slate-200">
          <h1 className="text-center font-base text-md">
            {userScore} 
          </h1>
        </div>
        {!isPicked && (
          <h1 className="text-center font-base text-xl text-red-600">
            00:{setTimer(timer)}
          </h1>
        )}
      </div>
      <h1 className="text-center font-medium text-2xl font-serif text-slate-100 mt-8 mb-4">
        {questionIndex + 1}) {questions[questionIndex].question}
      </h1>
      <div className="grid grid-cols-1 content-center gap-5 max-w-sm mx-auto lg:max-w-lg m-8">
        {questions[questionIndex].options.map((option, index) => (
          <button
            className={
              isPicked && questions[questionIndex].answer === index
                ? "border-2 text-sm md:text-sm lg:text-lg py-2 border-green-500 rounded text-white"
                : isPicked && index === wrongAnswer
                ? "border-2 text-sm rounded md:text-sm lg:text-lg py-2 border-red-600 text-white"
                : "border text-sm rounded md:text-sm lg:text-lg py-2 border-cyan-600 text-white"
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
              ? "py-2 p-8 text-white w-full max-w-sm  bg-gray-700 mt-4 rounded"
              : "py-2 px-8 bg-cyan-700 w-full max-w-sm mt-4 text-white rounded"
          }
          onClick={handleNextQuestion}
          disabled={!isPicked}
        >
          {questionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
      <div className="p-2 grid grid-cols-2 gap-3 max-w-sm mx-auto lg:max-w-lg m-10">
        <button
          className="p-1 py-2 text-sm bg-red-700 text-white rounded"
          onClick={handleEndGame}
        >
          End Quiz
        </button>
        <button
          className=" p-1 text-sm px-4 bg-green-700 text-white rounded"
          onClick={handleRestartGame}
        >
          Restart Quiz
        </button>
      </div>
      <div>
        <h2 className="text-center font-bold font-mono text-xl text-cyan-600 mb-8">
          KELQUIZ
        </h2>
      </div>
    </div>
  );
}
