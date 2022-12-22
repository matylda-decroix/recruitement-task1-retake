import { Navigate } from "react-router-dom";
import { useSelectNickname, useSelectResult } from "../state/hooks";

export const Results = () => {
  const nickname = useSelectNickname();
  const result = useSelectResult();
  if (nickname === "" || result === undefined) {
    return <Navigate to="/" />;
  }
  const { score, incorrect, missedCorrect, totalCorrect } = result;
  return (
    <div>
      <h2>Congratulations, {nickname}!</h2>
      <h2>Your score:</h2>
      <h2 className="resultPoints">{score} points</h2>
      <p>Incorrect: {incorrect}</p>
      <p>Missed correct: {missedCorrect}</p>
      <p>Total correct: {totalCorrect}</p>
    </div>
  );
};
