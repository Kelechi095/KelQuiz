import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/quizSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startQuiz());
  };

  return (
    <div className="p-2 h-screen bg-darkBlue">
        <nav className="p-4 flex items-center justify-center">
            <h2 className="font-mono tracking-wide text-xl font-bold text-cyan-600">QUIZDOWN</h2>
        </nav>
      <h1 className="text-4xl max-w-xs mx-auto text-center mt-12 md:text-6xl lg:text-7xl md:max-w-lg  lg:max-w-4xl font-serif p-2 text-white">
        Welcome to Quiz Down
      </h1>

      <div>
        <h2 className="text-lg font-medium max-w-md md:max-w-lg lg:max-w-3xl lg:text-xl text-center mx-auto p-3 lg:mt-8 text-cyan-600">Answer correctly in the quickest time. The faster you answer correctly, the higher your points!</h2>
      </div>

      <div className="mx-auto w-fit mt-4">
        <button className=" text-white bg-cyan-600 p-1 px-4 rounded" onClick={handleStartGame}>
          Start Game!
        </button>
      </div>
    </div>
  );
}
