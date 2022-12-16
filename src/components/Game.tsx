import { Navigate } from "react-router-dom";
import { useGame } from "../contexts/GameContext";
import { WordProvider } from "../contexts/WordContext";
import { MappingWords } from "./MappingWords";

export const Game = () => {
  const { nickname, data } = useGame();

  if (nickname === "") {
    return <Navigate to="/" />;
  }

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <MappingWords data={data} />
    </div>
  );
};
