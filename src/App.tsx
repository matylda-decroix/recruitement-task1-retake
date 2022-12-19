import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Game } from "./components/Game";
import { Results } from "./components/Results";
import { Start } from "./components/Start";
import { GameProvider } from "./contexts/GameContext";
import { WordProvider } from "./contexts/WordContext";

function App() {
  return (
    <BrowserRouter>
      <WordProvider>
        <GameProvider>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/game" element={<Game />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </GameProvider>
      </WordProvider>
    </BrowserRouter>
  );
}

export default App;
