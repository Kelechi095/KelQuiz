import HomeScreen from "./components/HomeScreen";
import EndScreen from "./components/EndScreen";
import GameScreen from "./components/GameScreen";
import useGetQuiz from "./hooks/useGetQuiz";

function App() {
  
  const {gameState} = useGetQuiz()

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
