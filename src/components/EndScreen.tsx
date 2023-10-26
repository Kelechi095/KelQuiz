import { useDispatch } from "react-redux"
import { endQuiz, startQuiz } from "../redux/quizSlice"


export default function EndScreen() {
    const dispatch = useDispatch()

    const handleRestartGame = () => {
        dispatch(startQuiz())
    }
    const handleEndGame = () => {
        dispatch(endQuiz())
    }

  return (
    <div>

        <h2>You scored: </h2>

        <button className='border p-1' onClick={handleRestartGame}>Restart Game</button>

        <button className='border p-1' onClick={handleEndGame}>End Game</button>
    </div>
  )
}
