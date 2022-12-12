import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Game } from "./components/Game";
import { Results } from "./components/Results";
import { Start } from "./components/Start";
import { GameProvider } from "./contexts/GameContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <GameProvider>
          <Route path="/" element={<Start />} />
          <Route path="/game" element={<Game />} />
          <Route path="/results" element={<Results />} />
        </GameProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
