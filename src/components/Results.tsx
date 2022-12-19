import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../state/store";

export const Results = () => {
  const nickname = useSelector((state: RootState) => {
    return state.game.nickname;
  });
  const result = useSelector((state: RootState) => {
    const activeWords = state.words;
    const data = state.apiData.data;
    if (data === null) return;
    const numberOfSelected = Object.keys(activeWords).length;
    const numberOfSelectedCorrect = data.goodwords.filter(
      (word) => activeWords[word]
    ).length;
    const totalCorrect = data.goodwords.length;
    const missedCorrect = totalCorrect - numberOfSelectedCorrect;
    const incorrect = numberOfSelected - numberOfSelectedCorrect;
    const score = numberOfSelectedCorrect * 2 - (missedCorrect + incorrect);
    return score;
  });
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
