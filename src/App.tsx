import { useSelector } from "react-redux";
import { RootState } from "./types/types";
import { useDispatch } from "react-redux";
import HomeScreen from "./components/HomeScreen";
import EndScreen from "./components/EndScreen";
import GameScreen from "./components/GameScreen";

function App() {
  const { gameState } = useSelector((state: RootState) => state.quiz);

  if (gameState === "off") {
    return <HomeScreen />;
  }

  if (gameState === "finish") {
    return <EndScreen />;
  }

  if (gameState === "start") {
    return <GameScreen />;
  }
}

export default App;
