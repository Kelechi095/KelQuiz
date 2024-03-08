import { useDispatch } from "react-redux";
import {
  endQuiz,
  finishQuiz,
  increaseUserScore,
  nextQuestion,
  startQuiz,
  startTimer,
} from "../redux/quizSlice";

import { useEffect, useState } from "react";
import { removeQuot } from "../utils/removeQuot";
import Options from "./Options";
import useGetQuiz from "../hooks/useGetQuiz";
import { useQueryClient } from "react-query";
import useGetQuestions from "../hooks/useGetQuestions";
import Loading from "./Loading";

 
export default function GameScreen() {
  const dispatch = useDispatch();
  const [isPicked, setIsPicked] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState<string | null>(null);

  const {questionIndex, userScore, timer } = useGetQuiz();

  const queryClient = useQueryClient()

  const {questions, refetch, isLoading, isFetching} = useGetQuestions()
  
  const handleEndGame = () => {
    dispatch(endQuiz());
    queryClient.invalidateQueries('questions')
  };

  const handleRestartGame = () => {
    queryClient.invalidateQueries("question")
    refetch()
    dispatch(startQuiz());
    setIsPicked(false);
  };

  const handleCheckAnswer = (answer: string, correctOption: string) => {
    if (answer === correctOption) {
      dispatch(increaseUserScore(timer));
      setIsPicked(true);
    } else {
      setIsPicked(true);
      setWrongAnswer(answer);
    }
  };

  const handleNextQuestion = () => {
    if (questions && questionIndex === questions.length - 1) {
      dispatch(finishQuiz());
      setWrongAnswer(null);
    } else {
      dispatch(nextQuestion());
      setWrongAnswer(null);
    }
  };

  useEffect(() => {
    if (questions && timer > 0) {
      const id = setInterval(() => {
        dispatch(startTimer());
      }, 1000);

      return () => clearInterval(id);
    }
  }, [dispatch, timer, questions]);

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

  if (isLoading || isFetching) return <Loading />

  return (
    <div className="p-4 py-6 bg-zinc-900 h-screen">
      <div className="flex justify-between items-center px-2 mt-2 mb-12 lg:px-6">
        <div className="flex rounded-full h-8 w-8 lg: 16 lg:16 justify-center items-center border-2 border-purple-200 text-white">
          <h1 className="text-center font-base text-md lg:text-xl">
            {userScore}
          </h1>
        </div>
        {!isPicked && (
          <h1 className="text-center font-base text-xl lg:text-2xl text-rose-500">
            00:{setTimer(timer)}
          </h1>
        )}
      </div>
      {questions && (
        <h1 className="text-center font-medium text-2xl font-serif text-slate-100 mt-8 mb-4 lg:text-4xl md:max-w-[80%] mx-auto">
          {questionIndex + 1}) {removeQuot(questions[questionIndex].question)}
        </h1>
      )}

      {questions && (
        <Options
          incorrectOptions={questions[questionIndex].incorrect_answers}
          correctOption={questions[questionIndex].correct_answer}
          isPicked={isPicked}
          wrongAnswer={wrongAnswer}
          handleCheckAnswer={handleCheckAnswer}
        />
      )}

      <div className="flex justify-center">
        <button
          className={
            !isPicked
              ? "p-2 text-white w-full lg:max-w-[70%] bg-zinc-800 mt-4 rounded font-semibold md:text-lg text-sm"
              : "p-2 bg-zinc-800 w-full lg:max-w-[70%] mt-4 text-white rounded"
          }
          onClick={handleNextQuestion}
          disabled={!isPicked}
        >
          {questions && questionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 mx-auto w-full md:max-w-[70%] mt-10">
        <button
          className=" p-2 text-sm bg-zinc-800 text-white md:text-lg font-semibold rounded"
          onClick={handleEndGame}
        >
          End Quiz
        </button>
        <button
          className="p-2 text-sm bg-zinc-800 text-white md:text-lg font-semibold rounded"
          onClick={handleRestartGame}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
