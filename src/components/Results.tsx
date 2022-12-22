import { Navigate } from "react-router-dom";
import { useSelectNickname, useSelectResult } from "../state/hooks";

export const Results = () => {
  const nickname = useSelectNickname();
  const result = useSelectResult();
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
