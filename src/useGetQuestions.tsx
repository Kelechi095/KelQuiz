import { useSelector } from "react-redux";
import { Quiz, RootState } from "./types/types";

import { generals, bbnaijas, capitals } from "./data";

export function shuffle(array: Quiz[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  
  return array.slice(0, 10);
}

const capitalQuestions = shuffle(capitals)
const bbnaijaQuestions = shuffle(bbnaijas)
const generalQuestions = shuffle(generals)

const getQuestions = (arg: Quiz[]) => {
    const questions = arg
    return questions
}

export default function useGetQuestions() {
  const { category } = useSelector((state: RootState) => state.quiz);

  const questions = getQuestions(
    category === "BBNAIJA"
      ? bbnaijaQuestions
      : category === "GENERAL"
      ? generalQuestions
      : capitalQuestions
  );

  return { questions };
}
