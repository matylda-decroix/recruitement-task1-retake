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
      <GameProvider>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/game" element={<Game />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
