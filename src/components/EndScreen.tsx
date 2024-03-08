import { useDispatch } from "react-redux";
import { endQuiz, startQuiz } from "../redux/quizSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useGetQuiz from "../hooks/useGetQuiz";
import useGetQuestions from "../hooks/useGetQuestions";
import { useQueryClient } from "react-query";

export default function EndScreen() {
  const { userScore } = useGetQuiz();
  const dispatch = useDispatch();

  const { refetch } = useGetQuestions();

  const queryClient = useQueryClient();

  const handleEndGame = () => {
    dispatch(endQuiz());
    queryClient.invalidateQueries("questions");
  };

  const handleRestartGame = () => {
    queryClient.invalidateQueries("question");
    refetch();
    dispatch(startQuiz());
  };

  const percentage = userScore;

  return (
    <div className="p-4 bg-zinc-900 h-screen ">
      <div className="h-[70%] flex flex-col justify-center items-center">
        <section className="w-32 mx-auto">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgb(192 132 252)`,
              textColor: "white",
              trailColor: "#d6d6d6",
              backgroundColor: "purple",
            })}
          />
        </section>

        <section className="mt-4">
          <h2 className="font-semibold font-mono fond text-xl text-center text-white">
            You answered {userScore / 10} out of 10 questions
          </h2>
        </section>

        <section className="flex justify-center gap-4 my-8">
          <button
            className="border-2 rounded border-purple-200 p-1 px-4 text-white"
            onClick={handleRestartGame}
          >
            Restart Quiz
          </button>

          <button
            className="border-2 rounded border-purple-200 p-1 px-8 text-white"
            onClick={handleEndGame}
          >
            End Quiz
          </button>
        </section>
      </div>
    </div>
  );
}
