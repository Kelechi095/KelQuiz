import { useDispatch } from "react-redux"
import { startQuiz } from "../redux/quizSlice"


export default function HomeScreen() {

    const dispatch = useDispatch()

    const handleStartGame = () => {
        dispatch(startQuiz())
    }

  return (
    <div>
        <h1>Welcome to Quiz Down</h1>

        <button className="border p-1" onClick={handleStartGame}>Start Game!</button>
    </div>
  )
}
