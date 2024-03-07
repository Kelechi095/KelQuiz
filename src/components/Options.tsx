import { useCallback, useMemo } from "react";
import { removeQuot } from "../utils/removeQuot";

interface OptionsProps {
  correctOption: string;
  incorrectOptions: string[];
  isPicked: boolean;
  wrongAnswer: number | null;
  handleCheckAnswer: (answer: number | string, index: number) => void;
}

const Options = ({
  correctOption,
  incorrectOptions,
  isPicked,
  wrongAnswer,
  handleCheckAnswer,
}: OptionsProps) => {
  console.log(incorrectOptions);

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
    <div className="grid grid-cols-1 lg:grid-cols-2 content-center gap-5 max-w-sm lg:max-w-lg mx-auto m-8 lg:mt-12">
      {options.map((option, index) => (
        <button
          className={
            isPicked && correctOption === option
              ? "border-2 text-sm md:text-sm lg:text-lg py-2 border-green-500 rounded text-white"
              : isPicked && index === wrongAnswer
              ? "border-2 text-sm rounded md:text-sm lg:text-lg py-2 border-red-600 text-white"
              : "border text-sm rounded md:text-sm lg:text-lg py-2 border-cyan-600 text-white"
          }
          key={index}
          onClick={() => handleCheckAnswer(correctOption, index)}
          disabled={isPicked === true}
        >
          {removeQuot(option)}
        </button>
      ))}
    </div>
  );
};

export default Options;
