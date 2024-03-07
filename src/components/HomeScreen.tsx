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
        <h2 className="font-mono tracking-wide text-xl lg:text-3xl font-bold text-cyan-600">
          KELQUIZ
        </h2>
      </nav>
      <h1 className="text-4xl max-w-xs mx-auto text-center mt-2 md:text-6xl lg:text-7xl md:max-w-lg  lg:max-w-4xl font-serif p-2 text-white">
        Welcome to KelQuiz
      </h1>

      <div>
        <h2 className="text-lg font-base max-w-md md:max-w-lg lg:max-w-3xl lg:text-xl font-semibold text-center mx-auto mt-10 p-3 lg:mt-8 text-cyan-600">
          PICK A CATEGORY
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2 md: lg:grid-cols-4 p-4 max-w-xs lg:max-w-2xl mx-auto">
        <button
          className="mt-3 py-2 text-sm text-white border rounded border-cyan-600"
          onClick={() => handleSelectCategory("GK")}
        >
          General Knowledge
        </button>
        <button
          className="mt-3 py-2 text-sm text-white border rounded border-cyan-600"
          onClick={() => handleSelectCategory("BOOKS")}
        >
          Books
        </button>
        
      </div>
    </div>
  );
}
