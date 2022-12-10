import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Game } from "./components/Game";
import { Results } from "./components/Results";
import { Start } from "./components/Start";

function App() {
  //const [nickname, setNickname] = useState("");
  //const [result, setResult] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
