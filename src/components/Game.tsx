import { Navigate } from "react-router-dom";
import { useGame } from "../contexts/GameContext";
import { MappingWords } from "./MappingWords";

export const Game = () => {
  const { nickname } = useGame();

  if (nickname === "") {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <MappingWords />
    </div>
  );
};
