import { useDispatch } from "react-redux";
import { startQuiz, setCategory } from "../redux/quizSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();


  const handleSelectCategory = (category: string) => {
    dispatch(setCategory(category))
    dispatch(startQuiz());

}

  return (
    <div className="p-2 h-screen bg-darkBlue">
      <nav className="p-4 flex items-center justify-center">
        <h2 className="font-mono tracking-wide text-xl font-bold text-cyan-600">
          QUIZDOWN
        </h2>
      </nav>
      <h1 className="text-4xl max-w-xs mx-auto text-center mt-12 md:text-6xl lg:text-7xl md:max-w-lg  lg:max-w-4xl font-serif p-2 text-white">
        Welcome to Quiz Down
      </h1>

      <div>
        <h2 className="text-lg font-medium max-w-md md:max-w-lg lg:max-w-3xl lg:text-xl text-center mx-auto p-3 lg:mt-8 text-cyan-600">
          Answer correctly in the quickest time. The faster you answer
          correctly, the higher your points!
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md: lg:grid-cols-4 p-4">
        <button
          className="mt-3 py-2 text-xs text-white border-2 border-green-500"
          onClick={() => handleSelectCategory("BBNAIJA")}
        >
          Bbnaija
        </button>
        <button
          className="mt-3 py-2 text-xs text-white border-2 border-blue-500"
          onClick={() => handleSelectCategory("GENERAL")}
        >
          General knowledge
        </button>
        <button
          className="mt-3 text-xs py-2  text-white border-2 border-yellow-500"
          onClick={() => handleSelectCategory("CAPITAL")}
        >
          Countries and Capital
        </button>
        <button
          className="mt-3 py-2 text-xs text-white border-2 border-red-500"
          onClick={() => handleSelectCategory("FOOTBALL")}
        >
          Football
        </button>
      </div>
    </div>
  );
}
