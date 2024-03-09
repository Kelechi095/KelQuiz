import { useQuery} from "react-query";
import useGetQuiz from "./useGetQuiz";
import axios from "axios";

const useGetQuestions = () => {

  const { category } = useGetQuiz();

  const api = "https://opentdb.com/api.php?amount=10&category=";

  const URL =
    category === "GK"
      ? `${api}${9}${`&type=multiple`}`
      : category === "BOOKS"
      ? `${api}${10}${`&type=multiple`}`
      : category === "CELEBRITIES"
      ? `${api}${26}${`&type=multiple`}`
      : category === "SPORTS"
      ? `${api}${21}${`&type=multiple`}`
      : category === "HISTORY"
      ? `${api}${23}${`&type=multiple`}`
      : category === "MUSIC"
      ? `${api}${12}${`&type=multiple`}`
      : category === "MOVIES"
      ? `${api}${11}${`&type=multiple`}`
      : category === "ANIMALS"
      ? `${api}${27}${`&type=multiple`}`
      : category === "MATHS"
      ? `${api}${19}${`&type=multiple`}`
      : category === "MYTH"
      ? `${api}${20}${`&type=multiple`}`
      : category === "TV"
      ? `${api}${14}${`&type=multiple`}`
      : category === "SCIENCE"
      ? `${api}${17}${`&type=multiple`}`
      : category === "CARTOONS"
      ? `${api}${32}${`&type=multiple`}`
      : category === "ANIME"
      ? `${api}${31}${`&type=multiple`}`
      : category === "GEOGRAPHY"
      ? `${api}${22}${`&type=multiple`}`
      : category === "GADGETS"
      ? `${api}${30}${`&type=multiple`}`
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
