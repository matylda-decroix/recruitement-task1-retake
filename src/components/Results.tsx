import { Navigate } from "react-router-dom";
import { useNickname, useResult } from "../state/hooks";

export const Results = () => {
  const nickname = useNickname();
  const result = useResult();
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
