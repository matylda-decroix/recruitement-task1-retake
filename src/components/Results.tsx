import { Navigate } from "react-router-dom";
import { useGame } from "../contexts/GameContext";

export const Results = () => {
  const { nickname, result } = useGame();
  if (nickname === "") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Congratulations, {nickname}!</h2>
      <h2>Your score:</h2>
      <h2 className="resultPoints">{result} points</h2>
    </div>
  );
};
