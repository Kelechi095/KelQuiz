import { useDispatch, useSelector } from "react-redux"
import { endQuiz, startQuiz } from "../redux/quizSlice"
import { RootState } from "../types/types"


export default function EndScreen() {
    const {userScore} = useSelector((state: RootState) => state.quiz)
    const dispatch = useDispatch()

    const handleRestartGame = () => {
        dispatch(startQuiz())
    }
    const handleEndGame = () => {
        dispatch(endQuiz())
    }

  return (
    <div className="p-4">

        <h2 className="text-semibold">You scored: {userScore} / 100</h2>

        <button className='border p-1' onClick={handleRestartGame}>Restart Quiz</button>

        <button className='border p-1' onClick={handleEndGame}>End Quiz</button>
    </div>
  )
}
