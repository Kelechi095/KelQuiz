import { useCallback, useMemo } from "react";
import { removeQuot } from "../utils/removeQuot";
import useGetQuiz from "../hooks/useGetQuiz";

interface OptionsProps {
  correctOption: string;
  incorrectOptions: string[];
  isPicked: boolean;
  wrongAnswer: string | null;
  handleCheckAnswer: (answer: string, correctOption: string) => void;
}

const Options = ({
  correctOption,
  incorrectOptions,
  isPicked,
  wrongAnswer,
  handleCheckAnswer,
}: OptionsProps) => {

  const {timer} = useGetQuiz()

  const allOptions = useMemo(
    () => [...incorrectOptions, correctOption],
    [correctOption, incorrectOptions]
  );

  const shuffleOptions = useCallback((arr: string[]) => {
    let j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1));
      x = arr[index];
      arr[index] = arr[j];
      arr[j] = x;
    }
    return arr;
  }, []);

  const options = useMemo(
    () => shuffleOptions(allOptions),
    [shuffleOptions, allOptions]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 content-center gap-5  md:max-w-[70%] mx-auto m-8 lg:mt-12">
      {options.map((option, index) => (
        <button
          className={
            isPicked && timer !== 10 && correctOption === option
              ? "border-2 text-sm md:text-sm lg:text-lg py-2 bg-green-600 border-green-600 rounded text-white"
              : isPicked && timer !==10 && option === wrongAnswer
              ? "border text-sm rounded md:text-sm lg:text-lg py-2 bg-red-600 border-red-600 text-white"
              : "border text-sm rounded md:text-sm lg:text-lg py-2 border-purple-200 text-white"
          }
          key={index}
          onClick={() => handleCheckAnswer(option, correctOption)}
          disabled={isPicked === true}
        >
          {removeQuot(option)}
        </button>
      ))}
    </div>
  );
};

export default Options;
