import { useSelector } from "react-redux";
import { RootState } from "../types/types";

const useGetQuiz = () => {
  const { gameState, category, questionIndex, userScore, timer } = useSelector(
    (state: RootState) => state.quiz
  );

  return { gameState, category, questionIndex, userScore, timer };
};

export default useGetQuiz;
