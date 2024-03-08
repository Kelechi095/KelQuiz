import { useQuery} from "react-query";
import useGetQuiz from "./useGetQuiz";
import axios from "axios";

const useGetQuestions = () => {

  const { category } = useGetQuiz();

  const api = "https://opentdb.com/api.php?amount=10&category=";

  const URL =
    category === "GK"
      ? `${api}${9}`
      : category === "BOOKS"
      ? `${api}${10}`
      : category === "CELEBRITIES"
      ? `${api}${26}`
      : category === "SPORTS"
      ? `${api}${21}`
      : category === "HISTORY"
      ? `${api}${23}`
      : category === "MUSIC"
      ? `${api}${12}`
      : category === "MOVIES"
      ? `${api}${11}`
      : category === "ANIMALS"
      ? `${api}${27}`
      : category === "MATHS"
      ? `${api}${19}`
      : category === "MYTH"
      ? `${api}${20}`
      : category === "TV"
      ? `${api}${14}`
      : category === "SCIENCE"
      ? `${api}${17}`
      : category === "CARTOONS"
      ? `${api}${32}`
      : category === "ANIME"
      ? `${api}${31}`
      : category === "GEOGRAPHY"
      ? `${api}${22}`
      : category === "GADGETS"
      ? `${api}${30}`
      : "";

  const fetchQuestions = async () => {
    const response = await axios.get(URL);
    return response.data.results;
  };

  const {
    data: questions,
    isLoading,
    refetch,
    isFetching,
  } = useQuery("questions", fetchQuestions);

  return { questions, isLoading, refetch, isFetching };
};

export default useGetQuestions;
