import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/quizSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startQuiz());
  };

  return (
    <div className="p-2">
        <nav className="p-4 flex items-center justify-center">
            <h2 className="font-mono tracking-wide text-xl font-bold">QUIZDOWN</h2>
        </nav>
      <h1 className="text-4xl max-w-xs mx-auto text-center mt-12 md:text-6xl lg:text-7xl md:max-w-lg  lg:max-w-4xl font-serif p-2">
        Welcome to Quiz Down
      </h1>

      <div>
        <h2 className="text-lg font-medium max-w-md md:max-w-lg text-textColor lg:max-w-3xl lg:text-xl text-center mx-auto p-3 lg:mt-8">Answer correctly in the quickest time. The faster you answer correctly, the higher your points!</h2>
      </div>

      <div className="mx-auto border w-fit mt-4">
        <button className="border p-1 " onClick={handleStartGame}>
          Start Game!
        </button>
      </div>
    </div>
  );
}
